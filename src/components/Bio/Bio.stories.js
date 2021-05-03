import React from "react";

import Bio from "./Bio";

export default {
  title: "Components/Bio",
  component: Bio,
};

const Template = () => (
  <Bio
    headshot="https://pbs.twimg.com/profile_images/968620685395308544/tCKxhH3N_400x400.jpg"
    name="Frankie Valentine"
    tagline="Building the next-gen of the web"
    role="Founder @ V3 Digital Studio"
  />
);
export const Default = Template.bind({});
