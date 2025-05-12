import { Component } from "react";
import "./App.css";

function App() {
  return (
    <>
      <ErrorWrapper>
        <NewComponent />
      </ErrorWrapper>
      <ErrorWrapper>
        <NewComponent2 />
      </ErrorWrapper>
    </>
  );
}

class ErrorWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    console.log("Error occured");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    } else {
      return <> {this.props.children} </>;
    }
  }
}

function NewComponent() {
  return <div>Hello there how are you??</div>;
}

function NewComponent2() {
  throw new Error("Something went wrong");
  return <div>I'm fine what about you??</div>;
}
export default App;
