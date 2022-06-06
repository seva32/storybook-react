import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Collapsible } from "./Collapsible";
import { Button } from "../Button";
import { Icon } from "../Icon";

export default {
  title: "Collapsible",
  component: Collapsible,
  includeStories: /^[A-Z]/,
  decorators: [withKnobs],
};

const Template = (args) => <Collapsible {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: "dolor sit amet consectetur",
  body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non soluta et hic necessitatibus sunt! Eos ab veniam, veritatis nulla deleniti facere aliquid molestiae, nam laborum aut suscipit libero nobis mollitia.",
  iconName: "info",
};

export const OpenedStory = Template.bind({});
OpenedStory.args = {
  title: "dolor sit amet consectetur",
  body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non soluta et hic necessitatibus sunt! Eos ab veniam, veritatis nulla deleniti facere aliquid molestiae, nam laborum aut suscipit libero nobis mollitia.",
  iconName: "warn",
  instantAni: true,
  startOpened: true,
};

export const IconlessStory = Template.bind({});
IconlessStory.args = {
  title: "dolor sit amet consectetur",
  body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non soluta et hic necessitatibus sunt! Eos ab veniam, veritatis nulla deleniti facere aliquid molestiae, nam laborum aut suscipit libero nobis mollitia.",
  viewBox: "0 0 10 5",
};

export const CustomToggleStory = Template.bind({});
CustomToggleStory.args = {
  title: "dolor sit amet consectetur",
  body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non soluta et hic necessitatibus sunt! Eos ab veniam, veritatis nulla deleniti facere aliquid molestiae, nam laborum aut suscipit libero nobis mollitia.",
  toggleElement: (
    <a href="www.sebastianfantini.com">
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "1rem" }}
      >
        <title />
        <g data-name="1" id="_1">
          <path d="M380,450H143a15,15,0,0,1-15-15V213.66a15,15,0,0,1,15-15H380a15,15,0,0,1,15,15V435A15,15,0,0,1,380,450ZM158,420H365V228.66H158Z" />
          <path d="M351.66,228.66H171.41a15,15,0,0,1-15-15V153.12a105.13,105.13,0,0,1,210.25,0v60.54A15,15,0,0,1,351.66,228.66Zm-165.25-30H336.66V153.12a75.13,75.13,0,0,0-150.25,0Z" />
          <path d="M261.54,352.67a46.5,46.5,0,1,1,46.5-46.5A46.55,46.55,0,0,1,261.54,352.67Zm0-63a16.5,16.5,0,1,0,16.5,16.5A16.52,16.52,0,0,0,261.54,289.67Z" />
          <path d="M261.54,389a15,15,0,0,1-15-15V337.67a15,15,0,1,1,30,0V374A15,15,0,0,1,261.54,389Z" />
        </g>
      </svg>
    </a>
  ),
  viewBox: "0 0 10 5",
  startOpened: true,
  children: <Button label="Buttonzuelo" />,
};
