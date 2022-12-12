export default function Bottom(props) {
  async function getData() {
    let result = await fetch('http://localhost:8080/state');
    let data = await result.json();
    props.setData(JSON.parse(data[data.length - 1].data));
    props.setSaveChange((prev) => !prev);
    console.log(JSON.parse(data[data.length - 1].data));
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
      <button onClick={() => saveData(props.data)}>save</button>
      <button onClick={getData}>reload</button>
    </div>
  );
}
