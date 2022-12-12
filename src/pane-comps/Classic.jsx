import Choice from './Choice.jsx';

const testList = ['AND', 'OR', 'NAND', 'NOR', 'XOR', 'XNOR', 'BUFFER', 'NOT', 'INPUT', 'OUTPUT'];

export default function Classic() {
  return (
    <div className="classic">
      <div className="title">Classic</div>
      {testList.map((item, index) => (
        <Choice id={Date.now() + index} key={index} name={item} />
      ))}
    </div>
  );
}
