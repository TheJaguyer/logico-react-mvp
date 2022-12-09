export default function Piece(props) {
  function handleDragStart(e) {
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData('props', JSON.stringify(props));
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }
  return (
    <div
      id={props.name}
      style={{ top: props.y, left: props.x, backgroundImage: `url(./images/${props.name}.png)` }}
      className="piece"
      draggable
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
    ></div>
  );
}
