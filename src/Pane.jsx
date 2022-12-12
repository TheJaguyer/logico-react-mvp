import Options from './pane-comps/Options.jsx';
import Bottom from './pane-comps/Bottom.jsx';

export default function Pane(props) {
  return (
    <div className="pane">
      <div className="title main-title">Logico</div>
      <Options />
      <Bottom
        pieces={props.pieces}
        setPieces={props.setPieces}
        lines={props.lines}
        setLines={props.setLines}
        serial={props.serial}
        setSerial={props.setSerial}
      />
    </div>
  );
}
