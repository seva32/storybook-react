/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import { Tabs } from "./Tabs";
import { withKnobs } from "@storybook/addon-knobs";

import { items } from "./mockData";
import { singleReducer } from ".";

export default {
  title: "Tabs",
  component: Tabs,
  includeStories: /^[A-Z]/,
  decorators: [withKnobs],
};

const Template = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items,
  position: "above",
};
