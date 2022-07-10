import './link.sass'

export default function Link({link, text}){
  const getLink = () => link.includes('@') ? `mailto:${link}` : link;
  return(
    <a className="link" href={getLink()} target="_blank" rel='noreferrer'>{text}</a>
  );
}
