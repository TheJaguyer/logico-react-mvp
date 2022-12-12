import { useState } from 'react';

export default function Bottom(props) {
  const [list, setList] = useState([]);

  async function getData(name) {
    let result = await fetch('http://localhost:8080/state');
    let data = await result.json();
    data.forEach((item) => {
      if (item.name === name) {
        console.log(JSON.parse(item.data));
        props.setLines(JSON.parse(item.data).lines);
        props.setSerial(JSON.parse(item.data).serial);
        props.setPieces(JSON.parse(item.data).pieces);
      }
    });
    console.log(JSON.parse(data[data.length - 1].data).serial);
  }
  async function saveData(name, newData) {
    console.log(newData);
    let result = await fetch('http://localhost:8080/state', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, data: JSON.stringify(newData) }),
    });
    let data = await result.json();
  }

  async function loadAll() {
    let result = await fetch('http://localhost:8080/state');
    let data = await result.json();
    let output = [];
    data.forEach((item) => {
      output.push(item.name);
    });
    setList(output);
  }

  return (
    <div>
      <div className="data">
        {list.map((item) => (
          <div className="choice" onClick={() => getData(item)}>
            {item}
          </div>
        ))}
      </div>
      <input type="text" placeholder="Name this layout!" />
      <button
        onClick={(e) =>
          saveData(e.target.previousSibling.value, { lines: props.lines, serial: props.serial, pieces: props.pieces })
        }
      >
        save
      </button>
      <button onClick={loadAll}>load</button>
    </div>
  );
}
