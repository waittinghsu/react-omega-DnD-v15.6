import React, { Component } from "react";
import ImageMapper from "react-image-mapper";

export default class imageMapperArea extends Component {
  constructor(props) {
    super(props);
    const Map = {
      name: "omega",
      areas: []
    };
    this.initArea = {
      name: `1`,
      shape: "circle",
      coords: [0, 0, 0],
      preFillColor: "#",
      fillColor: "#f84171"
    };

    this.state = {
      imageSrc:
        "https://www.qnap.com/i/_attach_file/product/photo/800_500/327_1520841112_QSW-1208-8C_Front.png?v=1",
      layer: "",
      page: "",
      client: "",
      catchPoint: "",
      map: Map
    };
  }

  onLoad = () => {
    //console.log("onLoad");
  };

  onClick = (event) => {
    console.log("onClick");
  };

  onMouseEnter = () => {
    console.log("onMouseEnter");
  };

  onMouseMove = () => {
    console.log("onMouseMove");
  };

  onMouseLeave = () => {
    console.log("onMouseLeave");
  };

  onImageClick = (event) => {
    const {
      nativeEvent: { layerX, layerY }
    } = event;
    const { map } = this.state;
    map.areas.push({
      ...this.initArea,
      name: `${map.areas.length + 1}`,
      coords: [layerX, layerY, 10]
    });
    this.setState({ map });
  };

  onImageMouseMove = (event) => {
    const {
      nativeEvent: { layerX, layerY, clientX, clientY },
      pageX,
      pageY
    } = event;
    this.setState({
      layer: `${layerX}, ${layerY}`,
      page: `${pageX}, ${pageY}`,
      client: `${clientX}, ${clientY}`
    });
  };

  render() {
    const { imageSrc, map, layer, page, client } = this.state;
    return (
      <header className="gray--bg white--text d-flex flex-column justify-center align-center">
        <img src={imageSrc} width={"200px"} alt="" />
        <div className="gray--bg darken-1">
          <ImageMapper
            src={imageSrc}
            map={map}
            width={600}
            lineWidth={4}
            onLoad={this.onLoad}
            onClick={this.onClick}
            onMouseEnter={(area) => this.onMouseEnter(area)}
            onMouseLeave={(area) => this.onMouseLeave(area)}
            onMouseMove={(area, _, evt) => this.onMouseMove(area, evt)}
            onImageClick={(evt) => this.onImageClick(evt)}
            onImageMouseMove={(evt) => this.onImageMouseMove(evt)}
          />
        </div>
        <div className="amber--bg">
          <p>layer: {layer}</p>
          <p>page: {page}</p>
          <p>client: {client}</p>
        </div>
      </header>
    );
  }
}
