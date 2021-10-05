
import './button.sass';

export default function Button(props){
  return (
    <div className="button">
      <span className="button__content">{props.text}</span>
      <span className="button__background"></span>
    </div>
  );
}
