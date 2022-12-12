function Input(props) {
  function flip() {
    console.log(`clicked node ${props.serial}`);
    props.toggleNode(props.serial);
    props.set((prev) => !prev);
  }
  return (
    <div
      id={props.serial}
      className="node"
      // onClick={flip}
      style={{
        left: props.pos[0] - 5,
        top: props.pos[1] - 5,
        position: 'absolute',
        backgroundColor: props.on ? 'red' : 'black',
        visibility: props.hovered ? 'visible' : 'hidden',
        cursor: 'pointer',
      }}
    ></div>
  );
}

function Output(props) {
  return (
    <div
      id={props.serial}
      className="node"
      style={{
        left: props.pos[0] - 5,
        top: props.pos[1] - 5,
        position: 'absolute',
        backgroundColor: props.on ? 'red' : 'black',
        visibility: props.hovered ? 'visible' : 'hidden',
        cursor: 'pointer',
      }}
    ></div>
  );
}

const Node = {
  Input: Input,
  Output: Output,
};

export default Node;
