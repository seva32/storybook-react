import "./App.css";
import { Button } from "./stories/Button/index";
import { HtmlTable } from "./stories/HtmlTable";

import {
  functionalColumns,
  simpleElements,
} from "./stories/HtmlTable/HtmlTable.stories";

function App() {
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
      </div>
    </div>
  );
}

export default App;
