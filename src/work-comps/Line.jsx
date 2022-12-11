import { useEffect, useState } from 'react';

export default function Line(props) {
  const [hovered, setHovered] = useState(false);
  const [on, setOn] = useState(props.nodes[props.startNode] || false);
  const [x1, setx1] = useState(document.getElementById(props.startNode).getBoundingClientRect().left + 6 + 'px');
  const [x2, setx2] = useState(document.getElementById(props.endNode).getBoundingClientRect().left + 6 + 'px');
  const [y1, sety1] = useState(document.getElementById(props.startNode).getBoundingClientRect().top + 6 + 'px');
  const [y2, sety2] = useState(document.getElementById(props.endNode).getBoundingClientRect().top + 6 + 'px');

  useEffect(() => {
    try {
      setOn(props.nodes[props.startNode]);
      setx1(document.getElementById(props.startNode).getBoundingClientRect().left + 6 + 'px');
      setx2(document.getElementById(props.endNode).getBoundingClientRect().left + 6 + 'px');
      sety1(document.getElementById(props.startNode).getBoundingClientRect().top + 6 + 'px');
      sety2(document.getElementById(props.endNode).getBoundingClientRect().top + 6 + 'px');
    } catch {
      props.remove(props.serial);
    }
  }, [props.onNode]);

  useEffect(() => {
    props.setLinesList({ ...props.linesList, [props.endNode]: on });
  }, [on]);

  function handleDelete() {
    props.remove(props.serial);
  }
  return (
    <line
      id={props.serial}
      className="line"
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      style={{ stroke: props.nodes[props.startNode] ? 'red' : 'gray', strokeWidth: hovered ? '5px' : '2px' }}
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      onContextMenu={handleDelete}
    />
  );
}
