import './partners.sass'
import dinosound from '../../../assets/images/dinosound-logo.svg'
import eisfuchs from '../../../assets/images/eisfuchs-logo.svg'
import labelsitter from '../../../assets/images/labelsitter-logo.svg'
import systemb from '../../../assets/images/system-b-logo.svg'
import tausendsassa from '../../../assets/images/tausendsassa-logo.svg'

export default function Partners(){
  return(
    <div className="partners flex">
      <img src={dinosound} alt="DinoSound" className="partners__item"></img>
      <img src={labelsitter} alt="Labelsitter" className="partners__item"></img>
      <img src={systemb} alt="System-B"  className="partners__item"></img>
      <img src={tausendsassa} alt="Tausendsassa Entertainment" className="partners__item"></img>
      <img src={eisfuchs} alt="Eisfuchs"  className="partners__item"></img>
    </div>
  )
}
