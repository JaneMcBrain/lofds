import styled from 'styled-components';
import { mailTo, phone } from '../../assets/assets';
import Link from './../common/Link/Link';

function FooterContent({classes= ''}: {classes?: string}){

  const FooterColumn = styled.div`
    width: 235px;

    @media only screen and (max-width: ${phone}){
      margin-bottom: 50px
    }
  `;

  const FooterContent = styled.div`
    width: 100%;
    padding-bottom: 72px;
    justify-content: space-between;

    @media only screen and (max-width: ${phone}){
      flex-direction: column;
      padding-bottom: 0;
    }
  `;

  return(
    <FooterContent className={classes}>
      <FooterColumn>
        <h2 className="headline h2 mb-20">Du hast eine Idee?</h2>
        <Link text="Erzähl uns davon" link={mailTo}></Link>
      </FooterColumn>
      <FooterColumn>
        <h2 className="headline h2 mb-20">Folge uns</h2>
        <Link text="Instagram" link="https://www.instagram.com/system.b.berlin/"></Link>
      </FooterColumn>
      <FooterColumn>
        <h2 className="headline h2 mb-20">Kontakt</h2>
        <p>L.O.F.D.S. UG & Co. KG</p>
        <p>Josef-Orlopp-Strasse 92-106</p>
        <p>10365 Berlin</p>
      </FooterColumn>
    </FooterContent>
  )
}

export default FooterContent;
