import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pawtner</h1>
        <Pet name="Lilith" animal="Cat" breed="Bombay" />
        <Pet name="Willy" animal="Cat" breed="Tabby" />
        <Pet name="St. Augustine" animal="Dog" breed="Lab" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
