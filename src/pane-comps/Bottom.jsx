import { useState } from 'react';

export default function Bottom(props) {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  async function getData(name) {
    props.setSaveChange((prev) => !prev);
    setList([]);
    let result = await fetch('http://localhost:8080/state');
    let data = await result.json();
    data.forEach((item) => {
      if (item.name === name) {
        console.log(JSON.parse(item.data));
        props.setPieces(JSON.parse(item.data).pieces);
        props.setSerial(JSON.parse(item.data).serial);

        setTimeout(props.setLines(JSON.parse(item.data).lines), 1000);
      }
    });
    console.log(JSON.parse(data[data.length - 1].data).serial);
  }
  async function saveData(name, newData) {
    if (!name) {
      name = Date.now().toLocaleString();
    }
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

  function updateText(e) {
    setInput(e.target.value);
  }

  return (
    <div className="bottom">
      <div className="data">
        {list.map((item) => (
          <div className="choice" onClick={() => getData(item)}>
            {item}
          </div>
        ))}
      </div>
      <input type="text" placeholder="Name this layout!" onChange={(e) => updateText(e)} />
      <div>
        <button onClick={(e) => saveData(input, { lines: props.lines, serial: props.serial, pieces: props.pieces })}>
          save
        </button>
        <button onClick={loadAll}>load</button>
      </div>
    </div>
  );
}
