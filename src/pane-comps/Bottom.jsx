export default function Bottom(props) {
  async function getData() {
    let result = await fetch('http://localhost:8080/state');
    let data = await result.json();
    props.setLines(JSON.parse(data[data.length - 1].data).lines);
    props.setSerial(JSON.parse(data[data.length - 1].data).serial);
    props.setPieces(JSON.parse(data[data.length - 1].data).pieces);
    props.setSaveChange((prev) => !prev);
    console.log(JSON.parse(data[data.length - 1].data).serial);
  }
  async function saveData(newData) {
    console.log(newData);
    let result = await fetch('http://localhost:8080/state', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: Date.now(), data: JSON.stringify(newData) }),
    });
    let data = await result.json();
  }

  return (
    <div className="data">
      <button onClick={() => saveData({ lines: props.lines, serial: props.serial, pieces: props.pieces })}>save</button>
      <button onClick={getData}>reload</button>
    </div>
  );
}
