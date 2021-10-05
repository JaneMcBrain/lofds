import './link.sass'

export default function Link(props){
  return(
    <a className="link" href={props.link} target="_blank">{props.text}</a>
  );
}
