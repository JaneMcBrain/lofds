import { elements } from "../../../assets/assets";
import HighlightText from "../../common/HighlightText/HighlightText";
import image from '../../../assets/images/labelsitter-element.jpg'
import './elements.sass';
import Link from "../../common/Link/Link";

export default function Elements(){
  const isEven = (index) => (index + 1) % 2 === 0;
  return (
    <div className="elements flex dir-column mb-50">
      {elements.map((el, index) =>
        <div key={el.title} className={isEven(index) ? 'elements__item elements__item--reverse' : 'elements__item'}>
          <img src={image} alt={el.title} className="elements__image"></img>
          <div className="elements__description flex dir-column align-start justify-center">
            <h2 className="elements__title headline h2 text-light">
              <HighlightText highlight='dark-bg' text={el.title}></HighlightText>
            </h2>
            <p className="elements__text">{el.text}</p>
            <Link link={el.linkAnchor} text={el.linkText}></Link>
          </div>
        </div>
        )
      }
    </div>
  )
}
