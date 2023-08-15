import { Component } from "react";

import Mountain1 from "../photos/1.jpg";
import Mountain2 from "../photos/2.jpg";
import Mountain3 from "../photos/5.jpg";
import Mountain4 from "../photos/8.jpg";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className="first-des">
        <div className="des-text">
          <h2> {this.props.heading} </h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
