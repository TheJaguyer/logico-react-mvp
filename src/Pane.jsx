import Options from './pane-comps/Options.jsx';
import Bottom from './pane-comps/Bottom.jsx';

export default function Pane(props) {
  return (
    <div className="pane">
      <div className="title main-title">Logico</div>
      <Options />
      <Bottom setData={props.setData} data={props.data} setSaveChange={props.setSaveChange} />
    </div>
  );
}
