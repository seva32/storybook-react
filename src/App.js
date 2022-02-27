import "./App.css";
import { Button } from "./stories/Button/index";
import { Badge } from "./stories/Badge/index";
import { HtmlTable } from "./stories/HtmlTable";

import Img from "./assets/img/profile.jpg";

const functionalColumns = [
  {
    key: "pic",
    label: "Pic",
    size: "72px",
    align: "center",
    content: (data) => <img src={data.pic} alt="fuck" />,
  },
  {
    key: "fullname",
    label: "Full name",
    content: (data) => <a href="https://google.com">{data.fullname}</a>,
  },
  {
    key: "age",
    label: "Age",
    align: "center",
  },
  {
    key: "address",
    label: "Address",
  },
  {
    key: "status",
    label: "Status",
    size: "is-2",
    content: Badge,
  },
  {
    key: "status-comp",
    label: "Status",
    size: "is-2",
    content: (data) => (
      <Button
        size="medium"
        primary
        label={data.status ? data.status : "empty"}
      />
    ),
  },
];

const simpleElements = [
  {
    fullname: "Seb [0]",
    age: 45,
    address: "Fake Av. 5678, 5E",
    pic: Img,
    status: "first",
  },
  {
    fullname: "Seb [1]",
    age: 32,
    address: "Fake Av. 5678, 5E",
    pic: Img,
  },
  {
    fullname: "Seb [2]",
    age: 45,
    address: "Fake Av. 5678, 5E",
    pic: Img,
  },
  {
    fullname: "Seb [3]",
    age: 46,
    address: "Fake Av. 5678, 5E",
    pic: Img,
  },
  {
    fullname: "Seb [4]",
    age: 45,
    address: "Fake Av. 5678, 5E",
    pic: Img,
  },
  {
    fullname: "Seb [5]",
    age: 78,
    address: "Fake Av. 5678, 5E",
    pic: Img,
  },
];

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <div>
          <Button label="Sebs" />
        </div>
        <div>
          <HtmlTable
            columns={functionalColumns}
            data={simpleElements}
            onRowClick={() => alert("sebas")}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
