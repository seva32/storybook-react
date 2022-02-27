import React from "react";

import { HtmlTable } from ".";
import { Button } from "../Button";
import { Badge } from "../Badge";
import Img from "../../assets/img/profile.jpg";

export const functionalColumns = [
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

export const simpleElements = [
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

export default {
  title: "Example/HtmlTable",
  component: HtmlTable,
  includeStories: /^[A-Z]/,
  argTypes: { onRowClick: { action: "clicked" } },
};

const Template = (args) => <HtmlTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  columns: functionalColumns,
  data: simpleElements,
  stripped: true,
  headerTextAlign: "center",
};
