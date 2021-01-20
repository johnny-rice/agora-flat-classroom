import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";
import "../theme.less";
import { AppRoutes } from "../AppRoutes";
import { configure } from "mobx";

configure({
    isolateGlobalState: true,
});

const initUI = () => {
    ReactDOM.render(<AppRoutes />, document.getElementById("root") as HTMLElement);
};

export default initUI;
