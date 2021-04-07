import React, { PureComponent } from "react";
import "./style/index.scss";
import ImageMapperArea from "./components/imageMapperArea";

export default class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <ImageMapperArea />
        <div className="d-flex flex-column red--bg black--text font-weight-black pt-3 mt-3 font-large rounded-lg">
          <span>151</span>
          <span>151</span>
          <span>151</span>
        </div>
        <div className="disable py-5" style={{ height: "60px" }}>
          <span>9559</span>
        </div>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see so9me magic happen!</h2>
      </div>
    );
  }
}
