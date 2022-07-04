import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

class MyClass extends Component {
  constructor() {
    super();
    this.state = { myCounter: 3 };
    console.log("constructor");
  }

  handleClick = () => {
    this.setState({ myCounter: this.state.myCounter + 1 }, () => console.log("callBack" + this.state.myCounter));
    console.log("after" + this.state.myCounter);
    return;
  };

  componentDidMount() {
    console.log("componentDidMount" + this.state.myCounter);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate" + this.state.myCounter);
  }

  shouldComponentUpdate() {
    if (this.state.myCounter > 6) return true;
    return false;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>Click Me!</button>
        {this.state.myCounter}
      </div>
    );
  }
}

export default MyClass;

root.render(<MyClass />);
