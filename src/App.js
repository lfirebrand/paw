const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", {
        onClick: this.handleTitleClick
      }, "Pawtner"),
      React.createElement(Pet, {
        name: "Willy",
        animal: "Cat",
        breed: "Tabby"
      }),
      React.createElement(Pet, {
        name: "Lilith",
        animal: "Cat",
        breed: "Domestic Shorthair"
      }),
      React.createElement(Pet, {
        name: "Sukee",
        animal: "Cat",
        breed: "Mixed"
      }),
      React.createElement(Pet, {
        name: "Milo",
        animal: "Cat",
        breed: "Mixed"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));