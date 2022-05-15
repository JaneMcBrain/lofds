import { project } from '../../../assets/assets';
import sankaImg from '../../../assets/images/sanka.jpg';
import HighlightText from '../../common/HighlightText/HighlightText';
import Link from '../../common/Link/Link';
import './project.sass'

export default function Project(){
  return(
    <div className="project flex dir-column">
      <h2 className="project__title h1 headline text-light">
        {project.title.map(text => <HighlightText key={text} highlight="gradient-bg" text={text}></HighlightText>)}
      </h2>
      <div className="project__content flex dir-column align-start">
        <h3 className="project__name h2 headline">{project.name}</h3>
        <p className="project__text">{project.description}</p>
        <Link text={project.linkText} link={project.linkAnchor}></Link>
        <img src={sankaImg} className="project__img" alt="Sanka from Sri Lanka"></img>
      </div>
    </div>
  );
}
