const parent = React.createElement(
  "h1",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("div", {}, "I'm child"),
    React.createElement("div", {}, "I'm child2"),
  ])
);
const heading = React.createElement("h1", { id: "heading" }, "Hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
