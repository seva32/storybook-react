/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import { Accordion } from "./Accordion";
import { withKnobs } from "@storybook/addon-knobs";

import { items } from "./mockData";
import { singleReducer } from ".";

export default {
  title: "Accordion",
  component: Accordion,
  includeStories: /^[A-Z]/,
  decorators: [withKnobs],
};

const Template = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items,
  reducer: singleReducer,
};
