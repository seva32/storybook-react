// import React from "react";

// import { withKnobs } from "@storybook/addon-knobs";
// import { action } from "@storybook/addon-actions";

// import Table from "./Table";
// import wrapper from "../../storybook/wrapper";
// import testData from "../../storybook/testData";

// import { Link, Avatar, Status, SelectableIcon } from "../..";

// export default {
//   title: "Table",
//   component: Table,
//   includeStories: /.*Story$/,
//   decorators: [withKnobs],
// };

// action("on-click");

// /*******************************************************************/

// const simpleColumns = [
//   {
//     key: "fullname",
//     label: "Full name",
//   },
//   {
//     key: "age",
//     label: "Age",
//   },
//   {
//     key: "address",
//     label: "Address",
//   },
// ];

// const simpleElements = [
//   {
//     fullname: testData.profileNames[0],
//     age: 45,
//     address: "Fake Av. 5678, 5E",
//     pic: testData.profilePics[0],
//   },
//   {
//     fullname: testData.profileNames[1],
//     age: 32,
//     address: "Fake Av. 5678, 5E",
//     pic: testData.profilePics[1],
//   },
//   {
//     fullname: testData.profileNames[2],
//     age: 45,
//     address: "Fake Av. 5678, 5E",
//     pic: testData.profilePics[2],
//   },
//   {
//     fullname: testData.profileNames[3],
//     age: 46,
//     address: "Fake Av. 5678, 5E",
//     pic: testData.profilePics[3],
//   },
//   {
//     fullname: testData.profileNames[4],
//     age: 45,
//     address: "Fake Av. 5678, 5E",
//     pic: testData.profilePics[4],
//   },
//   {
//     fullname: testData.profileNames[5],
//     age: 78,
//     address: "Fake Av. 5678, 5E",
//     pic: testData.profilePics[5],
//   },
// ];

// export const SimpleTableStory = () =>
//   wrapper(<Table columns={simpleColumns} data={simpleElements} />);
// SimpleTableStory.storyName = "Simple table";

// /*******************************************************************/

// const functionalColumns = [
//   {
//     key: "pic",
//     label: "Pic",
//     size: "72px",
//     align: "center",
//     content: (data) => <Avatar image={data.pic} />,
//   },
//   {
//     key: "fullname",
//     label: "Full name",
//   },
//   {
//     key: "age",
//     label: "Age",
//     align: "center",
//   },
//   {
//     key: "address",
//     label: "Address",
//   },
//   {
//     key: "status",
//     label: "Status",
//     size: "is-2",
//     content: Status,
//   },
//   {
//     key: "status-comp",
//     label: "Status",
//     size: "is-2",
//     content: (data) => (
//       <Status icon="location-arrow" size="md" status="inProgress">
//         A preparar
//       </Status>
//     ),
//   },
// ];

// export const DifferentSizesWithFunctionalStory = () =>
//   wrapper(<Table columns={functionalColumns} data={simpleElements} />);
// DifferentSizesWithFunctionalStory.storyName =
//   "Different sizes, with functional";

// /*******************************************************************/

// const functionalColumns2 = [
//   {
//     key: "pic",
//     label: "Pic",
//     size: "72px",
//     align: "center",
//     content: (data) => <SelectableIcon image={data.pic} />,
//   },
//   {
//     key: "fullname",
//     label: "Full name",
//     content: (data) => <Link to="/home">{data.fullname}</Link>,
//   },
//   {
//     key: "age",
//     label: "Age",
//     align: "center",
//   },
//   {
//     key: "address",
//     label: "Address",
//   },
//   {
//     key: "status",
//     label: "Status",
//     size: "is-2",
//     content: Status,
//   },
//   {
//     key: "status-comp",
//     label: "Status",
//     size: "is-2",
//     content: (data) => (
//       <Status icon="location-arrow" size="md" status="inProgress">
//         A preparar
//       </Status>
//     ),
//   },
// ];

// export const ClickableRowStory = () =>
//   wrapper(
//     <Table
//       columns={functionalColumns2}
//       data={simpleElements}
//       onRowClick={action("on-click")}
//     />
//   );

// ClickableRowStory.storyName = "Clickable row";
