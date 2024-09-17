import React, { Component } from "react";
import "./index.css";
const classNames = require("classnames");

export default class ColorPicker extends Component {
  render() {
    var selectedColor = this?.state?.selectedColor;

    return (
      <div>
        {/* <pre>{JSON.stringify(this, null, 2)}</pre> */}
        <div className="layout-row justify-content-center">
          <div className="card mt-75">
            <div
              className="canvas"
              data-testid="selectedColor"
              style={{ backgroundColor: selectedColor }}>
              <p
                className="text-center mx-auto px-5"
                style={{ backgroundColor: selectedColor }}>
                {selectedColor}
              </p>
            </div>
            <div className="card-actions">
              <div
                className="layout-row justify-content-center align-items-center"
                data-testid="colorPickerOptions">
                {this.props.colorPickerOptions.map((color, index) => {
                  return (
                    <div
                      className={classNames({
                        "color-box": true,
                        "mx-8": true,
                        "my-15": true,
                        selected: selectedColor === color,
                      })}
                      onClick={() => {
                        console.log("state", this.state);
                        this.setState({
                          selectedColor: color,
                        });
                      }}
                      style={{ backgroundColor: color }}
                      key={color}>
                      {/* {color} */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
