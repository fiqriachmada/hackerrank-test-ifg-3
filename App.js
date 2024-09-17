import React, { Component } from "react";
import "./App.css";
import ColorPicker from "./components/colorPicker/index.js";
import "h8k-components";

const title = "Color Picker";

class App extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <h8k-navbar header={title}></h8k-navbar>
        <ColorPicker
          colorPickerOptions={this.props.colorPickerOptions}
          initialSelectedColor={this.props.initialSelectedColor}
        />
      </div>
    );
  }
}

export default App;
