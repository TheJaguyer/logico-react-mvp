const testList = ['AND', 'OR', 'NAND'];

export default function Classic() {
  return (
    <div>
      <div className="title">Classic</div>
      {testList.map((item) => (
        <div className="choice" draggable>
          {item}
        </div>
      ))}
    </div>
  );
}
