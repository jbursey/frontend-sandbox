import React from "react";
import {Story, Meta} from "@storybook/react/types-6-0"

import {App, AppProps} from "../index"

const meta : Meta = {
 title: "Example/App",
 component: App,
 argTypes: {
     name: {control: "color"}
 }
};

const Template: Story<AppProps> = (args : AppProps) => <App {...args} />

export const AppEmpty = Template.bind({});
AppEmpty.args = {
    name: "",
    zzz: ""
}

export const AppNamed = Template.bind({});
AppNamed.args = {
    name: "Jeff",
    zzz: "f"
}

export default meta;