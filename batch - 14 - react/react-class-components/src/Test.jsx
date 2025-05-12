import { Component } from "react";

class Test extends Component {
  componentDidMount() {
    // mount
    console.log("Test component mounted");
  }

  componentDidUpdate() {
    // update
    console.log("Compnent updated");
  }

  componentWillUnmount() {
    // un-mount
    console.log("Component will unmount");
  }

  render() {
    return (
      <>
        <h2>Hello world From Test component</h2>
      </>
    );
  }
}

export default Test;
