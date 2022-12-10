export default function Choice(props) {
  function handleDragStart(e) {
    e.dataTransfer.setData('Text', e.target.id);
    e.target.style.opacity = '0.5';
  }

  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  return (
    <div
      draggable
      className="choice"
      id={props.name}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
    >
      {props.name}
    </div>
  );
}
