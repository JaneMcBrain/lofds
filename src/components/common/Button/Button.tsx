
import './button.sass';

export default function Button(props){
  return (
    <a className="button" href={props.link}>
      <span className="button__content">{props.text}</span>
      <span className="button__background"></span>
    </a>
  );
}
