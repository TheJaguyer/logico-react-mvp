import { useState } from 'react';

export default function TempLine(props) {
  const [hovered, setHovered] = useState(false);

  function handleDelete() {
    props.remove(props.serial);
  }
  return (
    <line
      id="line"
      className="line"
      x1={document.getElementById(props.startNode).getBoundingClientRect().left + 6 + 'px'}
      y1={document.getElementById(props.startNode).getBoundingClientRect().top + 6 + 'px'}
      x2={props.x}
      y2={props.y}
      style={{ stroke: props.on == 1 ? 'red' : 'gray', strokeWidth: hovered ? '5px' : '2px' }}
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      onContextMenu={handleDelete}
    />
  );
}
