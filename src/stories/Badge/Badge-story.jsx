// import React from "react";

// import {
//   Tabs,
//   Tab,
//   Table,
//   CircleSkeleton,
//   Time,
//   Link,
//   Radio,
//   RadioGroup,
//   Text,
//   Panel,
// } from "../../index";

// import Badge from "./Badge";
// import { withKnobs } from "@storybook/addon-knobs";
// import wrapper from "../../storybook/wrapper";
// import testData from "../../storybook/testData";

// const profilePic1 =
//   "https://assets.entrepreneur.com/content/3x2/1300/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg";
// const profilePic2 =
//   "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg";

// export default {
//   title: "Badge",
//   component: Badge,
//   includeStories: /.*Story$/,
//   decorators: [withKnobs],
// };

// export const AllSizesStory = () =>
//   wrapper(
//     <>
//       <div className="level mt-2">
//         <div className="level-item mb-2">
//           <Text>Sizes</Text>
//         </div>
//       </div>
//       <div className="columns is-centered">
//         <div className="column has-text-centered">
//           <Badge size="xl" className="py-half">
//             xl - Extra large text
//           </Badge>
//         </div>
//         <div className="column has-text-centered">
//           <Badge size="lg" className="py-half">
//             lg - Large text
//           </Badge>
//         </div>
//         <div className="column has-text-centered">
//           <Badge size="md" className="py-third">
//             md - Normal text
//           </Badge>
//         </div>
//         <div className="column has-text-centered">
//           <Badge size="sm">sm - Small text </Badge>
//         </div>
//         <div className="column has-text-centered">
//           <Badge size="xs">xs - Extra small text</Badge>
//         </div>
//       </div>
//     </>
//   );
// AllSizesStory.storyName = "All sizes";

// export const WithColorsStory = () =>
//   wrapper(
//     <>
//       <div className="level mt-2">
//         <div className="level-item mb-2">
//           <Text>Colors</Text>
//         </div>
//       </div>
//       <div className="columns is-centered">
//         <div className="column has-text-centered">
//           <Text size="lg">
//             {testData.shortText}
//             <Badge color="inProgress" size="lg">
//               Inprogress
//             </Badge>
//           </Text>
//         </div>
//         <div className="column has-text-centered">
//           <Text size="lg">
//             {testData.shortText}
//             <Badge color="available" size="lg">
//               Available
//             </Badge>
//           </Text>
//         </div>
//         <div className="column has-text-centered">
//           <Text size="lg">
//             {testData.shortText}
//             <Badge color="error" size="lg">
//               Error
//             </Badge>
//           </Text>
//         </div>
//         <div className="column has-text-centered">
//           <Text size="lg">
//             {testData.shortText}
//             <Badge color="primary" size="lg">
//               Primary
//             </Badge>
//           </Text>
//         </div>
//       </div>
//       <div className="columns is-centered">
//         <div className="column has-text-centered">
//           <Text size="lg">
//             {testData.shortText}
//             <Badge color="inProgress" size="lg" invert>
//               Inprogress, inverted
//             </Badge>
//           </Text>
//         </div>
//         <div className="column has-text-centered">
//           <Text size="lg">
//             {testData.shortText}
//             <Badge color="available" size="lg" invert>
//               Available, inverted
//             </Badge>
//           </Text>
//         </div>
//         <div className="column has-text-centered">
//           <Text size="lg">
//             {testData.shortText}
//             <Badge color="error" size="lg" invert>
//               Error, inverted
//             </Badge>
//           </Text>
//         </div>
//         <div className="column has-text-centered">
//           <Text size="lg">
//             {testData.shortText}
//             <Badge color="primary" size="lg" invert>
//               Primary, inverted
//             </Badge>
//           </Text>
//         </div>
//       </div>
//     </>
//   );
// WithColorsStory.storyName = "With colors";

// export const TextLengthsStory = () =>
//   wrapper(
//     <>
//       <div className="level mt-2">
//         <div className="level-item mb-2">
//           <Text>Badge with a max length setting</Text>
//         </div>
//       </div>
//       <div className="columns is-centered">
//         <Panel level="2">
//           <div className="column is-size-2 has-text-centered panel has-shadow mb-0">
//             <Text>
//               With max length
//               <Badge size="md" maxLength={8}>
//                 Largest badge text ever
//               </Badge>
//             </Text>
//           </div>
//           <hr />
//           <div className="column is-size-2 has-text-centered panel has-shadow">
//             <Text>
//               Without max length
//               <Badge size="md">Largest badge text ever</Badge>
//             </Text>
//           </div>
//         </Panel>
//       </div>
//     </>
//   );
// TextLengthsStory.storyName = "With text max length";

// export const webappUsageStory = (args) =>
//   wrapper(
//     <>
//       <div className="level mt-2">
//         <div className="level-item">
//           <Text>With Tabs</Text>
//         </div>
//       </div>
//       <div className="level justify-center">
//         <div style={{ minWidth: "90%" }}>
//           <Tabs className="mb-3 mt-1" onChange={null} active="remission">
//             <Tab name="brand">Marca </Tab>
//             <Tab name="operation">Operación </Tab>
//             <Tab name="notification">Notificaciones</Tab>
//             <Tab name="billing">Facturación</Tab>
//             <Tab name="remission">
//               Remisión
//               <Text inline>
//                 <Badge color="available" invert>
//                   NUEVA!
//                 </Badge>
//               </Text>
//             </Tab>
//           </Tabs>
//         </div>
//       </div>
//       <hr />
//       <div className="columns is-centered mt-4 mb-4">
//         <Text>Highlight in Orders Charges</Text>
//       </div>
//       <div className="columns is-centered is-gapless">
//         <div className="column is-3">
//           <Text weight="medium" className="ml-1">
//             Sin identificar
//             {
//               <Badge size="md" color="available">
//                 32% OFF
//               </Badge>
//             }
//           </Text>
//           <Text size="sm" className="ml-1" color="lightText">
//             El paquete no posee ninguna etiqueta
//           </Text>
//           <Text size="sm" className="ml-1">
//             2 pedidos
//           </Text>
//         </div>
//         <div className="column is-1" />
//         <div className="column is-1">
//           <Text weight="medium" className="ml-1">
//             $1200
//           </Text>
//         </div>
//       </div>
//       <hr />
//       <div className="columns is-centered mt-4 mb-4">
//         <Text>With Table</Text>
//       </div>
//       <div className="columns is-centered is-gapless">
//         <div className="column is-10">
//           <Table
//             data={[{ orders: "blah" }]}
//             stickyHeader
//             hideHeader={false}
//             columns={[
//               {
//                 label: null,
//                 content: (data) => <CircleSkeleton size="md" />,
//                 dataProp: "goodsIn",
//                 size: "is-1",
//                 align: "center",
//               },
//               {
//                 label: "Referencia",
//                 content: (data) => (
//                   <>
//                     <Time
//                       size="sm"
//                       fadeEnd
//                       weight="light"
//                       value="2020-10-15 12:52:54.204011"
//                     >
//                       <Badge size="xs" color="new" invert>
//                         Nueva!
//                       </Badge>
//                     </Time>
//                     <Text size="lg" fadeEnd weight="medium">
//                       <Link to="#">#3453453SSS</Link>
//                       <Badge size="xs" color="warning" invert>
//                         Prioritario
//                       </Badge>
//                     </Text>
//                   </>
//                 ),
//                 dataProp: "goodsIn",
//                 size: "is-3",
//               },
//               {
//                 label: "Agenda",
//                 content: (data) => <Text>2020-10-15</Text>,
//                 dataProp: "goodsIn",
//                 size: "is-3",
//               },
//               {
//                 label: "Diferencias",
//                 content: (data) => <Text>sin diferencias</Text>,
//                 dataProp: "goodsIn",
//                 size: "is-3",
//               },
//               {
//                 label: "Cargos",
//                 content: (data) => <Text>sin cargos</Text>,
//                 dataProp: "goodsIn",
//                 size: "is-3",
//               },
//             ]}
//           />
//         </div>
//       </div>
//       <hr />
//       <div className="columns is-centered mt-4 mb-4">
//         <Text>With Radios</Text>
//       </div>
//       <div className="columns is-centered is-gapless">
//         <div className="column is-6">
//           <Panel>
//             <Text size="md" lead>
//               ¿De qué manera querés que sea la devolución?
//             </Text>
//             <Text size="lg" color="lightText" className="mb-3">
//               Seleccioná el tipo de devolución que vas a realizar
//             </Text>
//             <RadioGroup group="service_type" onChange={null} value="">
//               <Radio value="ship_pap">
//                 <Text size="lg" weight="strong">
//                   Devolver a origen desde el domicilio del comprador
//                   <Badge size="md" color="information" invert>
//                     SÓLO CABA Y GBA
//                   </Badge>
//                 </Text>
//                 <Text size="md" color="lightText" className="mb-1">
//                   Vamos a retirar los productos a devolver en una visita.
//                 </Text>
//               </Radio>
//               <Radio value="ship_pap">
//                 <Text size="lg" weight="strong">
//                   Devolver a origen desde sucursal
//                   <Badge size="md" color="information" invert>
//                     SÓLO CORDOBA
//                   </Badge>
//                 </Text>
//                 <Text size="md" color="lightText" className="mb-1">
//                   Vamos a retirar los productos en la sucursal.
//                 </Text>
//               </Radio>
//               <Radio value="ship_pap">
//                 <Text size="lg" weight="strong">
//                   Devolver a origen desde otro punto
//                 </Text>
//                 <Text size="md" color="lightText" className="mb-1">
//                   Vamos a retirar los productos donde indiques.
//                 </Text>
//               </Radio>
//             </RadioGroup>
//           </Panel>
//         </div>
//       </div>

//       <div style={{ minHeight: "150px" }} />
//     </>
//   );
// webappUsageStory.storyName = "Wepapp usage";
