import Choice from './Choice.jsx';

const testList = ['AND', 'BUFFER', 'NAND', 'NOR', 'NOT', 'OR', 'XNOR', 'XOR', 'INPUT', 'OUTPUT'];

export default function Classic() {
  return (
    <div>
      <div className="title">Classic</div>
      {testList.map((item, index) => (
        <Choice id={Date.now() + index} key={index} name={item} />
      ))}
    </div>
  );
}
