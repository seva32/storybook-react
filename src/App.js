import React from "react";

import "./App.css";
import { Button } from "./stories/Button/index";
import { HtmlTable } from "./stories/HtmlTable";
import { Pagination } from "./stories/Pagination";
import { TagsField } from "./stories/Tag/TagField";
import { MultiselectTag } from "./stories/Tag/MultiselectTag";
import { default as data } from "./stories/Pagination/MOCK_DATA.json";
import { SVGContainer } from "./stories/SVGContainer";
import { ReactComponent as FinalImg } from "./assets/final-screen.svg";
import { DnD } from "./stories/DnD";
import { DnDComponent } from "./stories/DnD/DnDComponent";
import { ToastNotification } from "./stories/Toast";
import { TypeAheadDropDown } from "./stories/Typeahead";

import {
  functionalColumns,
  simpleElements,
} from "./stories/HtmlTable/HtmlTable.stories";

function App() {
  const [itemsList] = React.useState(data);

  const [currentItems, setCurrentItems] = React.useState([]);
  const [fieldValue, setFieldValue] = React.useState(null);
  const [selectedTags, setSelectedTags] = React.useState(["tag1"]);
  const [notif, setnotif] = React.useState();
  const [typeahead, setTypeahead] = React.useState();

  // must include and 'id' prop
  const dndData = [
    { id: "axo", content: "Display me first" },
    { id: "oxe", content: "Display me second" },
    { id: "rux", content: "Display me nth" },
  ];

  React.useEffect(() => {
    setnotif({
      title: "Error",
      message: `Profile deletion failed in ${typeahead}`,
      timeout: 2500,
      type: "error",
      index: Date.now(),
    });
  }, [typeahead]);

  function onPageChanged(paginationData) {
    const { currentPage, pageLimit } = paginationData;
    const offset = (currentPage - 1) * pageLimit;
    const currentItems = itemsList.slice(offset, offset + pageLimit);
    setCurrentItems(currentItems);
    // axios
    //   .get(`/api/items?page=${currentPage}&limit=${pageLimit}`)
    //   .then((response) => {
    //     const currentItems = response.data;
    //     setCurrentPage(currentPage);
    //     setCurrentItems(currentItems);
    //     setTotalPages(totalPages);
    //   });
  }

  return (
    <div className="wrapper">
      <div className="content">
        <div className="section">
          <Button label="Sebs" />
        </div>
        <div className="section">
          <HtmlTable
            columns={functionalColumns}
            data={simpleElements}
            onRowClick={() => alert("sebas")}
            stripped={true}
            headerTextAlign="center"
            stickyHeader
          />
        </div>
        <div className="section">
          <ul style={{ display: "flex", flexDirection: "column" }}>
            {currentItems?.map((item, i) => (
              <li key={`${item.name}-${i}`}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="section">
          <Pagination
            totalItems={itemsList.length}
            pageLimit={10}
            pageNeighbours={1}
            onPageChanged={onPageChanged}
          />
        </div>
        <div className="section">
          <MultiselectTag
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            defaultTags={["tag1", "tag2", "tag3"]}
          />
          <TagsField
            customTags={["tag1", "tag2"]}
            onChange={() => {}}
            placeholder={""}
            setFieldValue={setFieldValue}
          />
        </div>
        <SVGContainer width="20%">
          <FinalImg />
        </SVGContainer>
        <div className="section">
          <DnD component={DnDComponent} data={dndData} />
        </div>
        <div className="section">
          <ToastNotification notif={notif} position="br" />
        </div>
        <div className="section">
          <TypeAheadDropDown setSelected={setTypeahead} />
        </div>
      </div>
    </div>
  );
}

export default App;
