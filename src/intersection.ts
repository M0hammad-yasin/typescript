type draggable = {
  drag(): void;
};
type resizeable = {
  resize(): void;
};
type UIWidget = draggable & resizeable;
let textBox: UIWidget = {
  drag() {},
  resize() {},
};
