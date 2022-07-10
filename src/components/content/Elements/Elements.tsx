import './elements.sass';
import { elements } from "../../../assets/assets";
import HighlightText from "../../common/HighlightText/HighlightText";
import Link from "../../common/Link/Link";
import systemb from '../../../assets/images/system-b-element.jpg'
import dinosound from '../../../assets/images/dinosound-element.jpg'
import ahadesign from '../../../assets/images/aha-design-element.jpg'
import tausendsassa from '../../../assets/images/tausendsassa-element.jpg'
import labelsitter from '../../../assets/images/labelsitter-element.jpg'
import saxophonretreat from '../../../assets/images/saxophonretreat-element.jpg'
import handtuchverleih from '../../../assets/images/hundtuchverleih-element.jpg'
import GetInspired from '../../common/GetInspired';

export default function Elements(){
  const isEven = (index) => (index + 1) % 2 === 0;
  const images = [tausendsassa, labelsitter, systemb, dinosound, ahadesign, saxophonretreat, handtuchverleih];
  const convertId = (text: string) => text.toLowerCase().replace(' ', '').replace('-', '');

  return (
    <div className="elements flex dir-column relative">
      <GetInspired color="blue" startFrom={1050} scrollTo={4800} />
      {elements.map((el, index) =>
        <div key={el.title} id={convertId(el.title)} 
          className={isEven(index) ? 'elements__item elements__item--reverse' : 'elements__item'}>
          <img src={images[index]} alt={el.title} className="elements__image"></img>
          <div className="elements__description flex dir-column align-start justify-center">
            <h2 className="elements__title headline h1 text-light flex dir-column">
              <HighlightText highlight='dark-bg' text={el.title}></HighlightText>
              {el.title_2 && <HighlightText highlight='dark-bg' text={el.title_2}/>}
            </h2>
            <p className="elements__text">{el.text}</p>
            {el.linkAnchor.length > 0 && <Link link={el.linkAnchor} text={el.linkText}></Link>}
          </div>
        </div>
        )
      }
    </div>
  )
}
