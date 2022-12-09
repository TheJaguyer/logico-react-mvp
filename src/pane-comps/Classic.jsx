import Choice from './Choice.jsx';

const testList = ['AND', 'BUFFER', 'NAND', 'NOR', 'NOT', 'OR', 'XNOR', 'XOR'];

export default function Classic() {
  return (
    <div>
      <div className="title">Classic</div>
      {testList.map((item, index) => (
        <Choice key={index} item={item} />
      ))}
    </div>
  );
}
