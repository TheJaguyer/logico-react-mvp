import { useState, useEffect } from 'react';
import Node from './Node.jsx';

function AND(props) {
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [out, setOut] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => logic(), [A, B]);

  function logic() {
    setOut(A & B);
  }

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.remove(props.serial);
  }

  const Aprops = { on: A, set: setA, hovered, pos: [5, 18], serial: 'A input' + props.serial };
  const Bprops = { on: B, set: setB, hovered, pos: [5, 31], serial: 'B input' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'Outpu' + props.serial };

  return (
    <div
      id={'AND gate' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/AND.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} />
      <Node.Input {...Bprops} />
      <Node.Output {...Outprops} />
    </div>
  );
}

function OR(props) {
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [out, setOut] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => logic(), [A, B]);

  function logic() {
    setOut(A || B);
  }

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.remove(props.serial);
  }

  const Aprops = { on: A, set: setA, hovered, pos: [5, 18], serial: 'A input' + props.serial };
  const Bprops = { on: B, set: setB, hovered, pos: [5, 31], serial: 'B input' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output' + props.serial };

  return (
    <div
      id={'OR gate' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/OR.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} />
      <Node.Input {...Bprops} />
      <Node.Output {...Outprops} />
    </div>
  );
}

function BUFFER(props) {
  const [A, setA] = useState(false);
  const [out, setOut] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => logic(), [A]);

  function logic() {
    setOut(A);
  }

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.remove(props.serial);
  }

  const Aprops = { on: A, set: setA, hovered, pos: [5, 24], serial: 'A input' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output' + props.serial };

  return (
    <div
      id={'BUFFER gate' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/BUFFER.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} />
      <Node.Output {...Outprops} />
    </div>
  );
}

function NAND(props) {
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [out, setOut] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => logic(), [A, B]);

  function logic() {
    setOut(!(A & B));
  }

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.remove(props.serial);
  }

  const Aprops = { on: A, set: setA, hovered, pos: [5, 18], serial: 'A input' + props.serial };
  const Bprops = { on: B, set: setB, hovered, pos: [5, 31], serial: 'B input' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output' + props.serial };

  return (
    <div
      id={'NAND gate' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/NAND.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} />
      <Node.Input {...Bprops} />
      <Node.Output {...Outprops} />
    </div>
  );
}

function NOR(props) {
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [out, setOut] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => logic(), [A, B]);

  function logic() {
    setOut(!(A || B));
  }

  function handleDelete() {
    props.remove(props.serial);
  }

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  const Aprops = { on: A, set: setA, hovered, pos: [5, 18], serial: 'A input' + props.serial };
  const Bprops = { on: B, set: setB, hovered, pos: [5, 31], serial: 'B input' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output' + props.serial };

  return (
    <div
      id={'NOR gate' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/NOR.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} />
      <Node.Input {...Bprops} />
      <Node.Output {...Outprops} />
    </div>
  );
}

function NOT(props) {
  const [A, setA] = useState(false);
  const [out, setOut] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => logic(), [A]);

  function logic() {
    setOut(!A);
  }

  function handleDelete() {
    props.remove(props.serial);
  }

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  const Aprops = { on: A, set: setA, hovered, pos: [5, 24], serial: 'A input' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output' + props.serial };

  return (
    <div
      id={'NOT gate' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/NOT.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} />
      <Node.Output {...Outprops} />
    </div>
  );
}

function XNOR(props) {
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [out, setOut] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => logic(), [A, B]);

  function logic() {
    setOut(A === B);
  }

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.remove(props.serial);
  }

  const Aprops = { on: A, set: setA, hovered, pos: [5, 18], serial: 'A input' + props.serial };
  const Bprops = { on: B, set: setB, hovered, pos: [5, 31], serial: 'B input' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output' + props.serial };

  return (
    <div
      id={'XNOR gate' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/XNOR.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} />
      <Node.Input {...Bprops} />
      <Node.Output {...Outprops} />
    </div>
  );
}

function XOR(props) {
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [out, setOut] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => logic(), [A, B]);

  function logic() {
    setOut(A ? !B : B);
  }

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.remove(props.serial);
  }

  const Aprops = { on: A, set: setA, hovered, pos: [5, 18], serial: 'A input' + props.serial };
  const Bprops = { on: B, set: setB, hovered, pos: [5, 31], serial: 'B input' + props.serial };
  const Outprops = { on: out, hovered, pos: [52, 24], serial: 'output' + props.serial };

  return (
    <div
      id={'XOR gate' + props.serial}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/XOR.png)` }}
      className="piece"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...Aprops} />
      <Node.Input {...Bprops} />
      <Node.Output {...Outprops} />
    </div>
  );
}

function INPUT(props) {
  const [out, setOut] = useState(false);
  const [hovered, setHovered] = useState(false);

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.remove(props.serial);
  }

  const Outprops = { on: out, hovered, pos: [30, 14], serial: 'output' + props.serial };

  return (
    <div
      id={'INPUT' + props.serial}
      style={{ top: props.y, left: props.x, backgroundColor: out ? 'red' : 'black' }}
      className="IO"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
      onClick={() => setOut((prev) => !prev)}
    >
      <Node.Output {...Outprops} />
    </div>
  );
}

function OUTPUT(props) {
  const [A, setA] = useState(false);
  const [out, setOut] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => logic(), [A]);

  function logic() {
    setOut(A);
  }

  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function handleDelete() {
    props.remove(props.serial);
  }

  const inprops = { on: A, set: setA, hovered, pos: [-3, 14], serial: 'input' + props.serial };

  return (
    <div
      id={'INPUT' + props.serial}
      style={{ top: props.y, left: props.x, backgroundColor: out ? 'red' : 'black' }}
      className="IO"
      draggable={hovered ? true : false}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onContextMenu={handleDelete}
    >
      <Node.Input {...inprops} />
    </div>
  );
}

const Gates = {
  AND: AND,
  OR: OR,
  BUFFER: BUFFER,
  NAND: NAND,
  NOR: NOR,
  NOT: NOT,
  XNOR: XNOR,
  XOR: XOR,
  INPUT: INPUT,
  OUTPUT: OUTPUT,
};

export default Gates;
