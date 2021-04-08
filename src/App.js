import React, { PureComponent } from "react";
import "./style/index.scss";
import ImageMapperArea from "./components/ImageMapperArea";

export default class App extends PureComponent {
  render() {
    const test = [...Array(14).keys()].map((key) => ++key);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see so9me magic happen!</h2>
        <ImageMapperArea />
        <div className="d-flex flex-column red--bg black--text font-weight-black pt-3 mt-3 font-large rounded-lg">
          <span className="disable py-5">151</span>
          <span className="disable py-5">151</span>
          <span className="disable py-5">151</span>
        </div>
        <body>
          <div clsssName="d-flex flex-row justify-space-between user-select">
            <div className="d-flex flex-column" style={{ width: "350px" }}>
              {test.map((v) => (
                <div className="d-flex flex-row align-center">
                  <span className="px-3" style={{ width: "25px" }}>
                    {v}
                  </span>
                  <div className="border-sm w-100 gray--bg darken-3 amber--text text-center">
                    omega{v}omega
                  </div>
                </div>
              ))}
            </div>
          </div>
        </body>
      </div>
    );
  }
}
