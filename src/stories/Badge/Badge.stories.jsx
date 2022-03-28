/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Badge from "./Badge";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export const profilePic1 =
  "https://assets.entrepreneur.com/content/3x2/1300/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg";
export const profilePic2 =
  "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg";

export default {
  title: "Badge",
  component: Badge,
  includeStories: /^[A-Z]/,
  decorators: [withKnobs],
};

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "md",
  maxLength: 5,
  color: "violet",
  children: "Caleidoscope",
  iconRight: true,
  icon: "😅",
};
