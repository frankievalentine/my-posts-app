import React from "react";

import Post from "./Post";

export default {
  title: "Components/Post",
  component: Post,
};

const Template = () => (
  <Post
    content="I’m working in Figma to design a website to display all of my Tweets"
    date="4/28/2021"
  />
);

export const Default = Template.bind({});
