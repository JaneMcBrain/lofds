import styled from 'styled-components';
import { phone } from '../assets/assets';
import Link from './common/Link/Link';

export default function Footer(){
  const Footer = styled.footer`
    z-index: 0;
  `;
  const FooterColumn = styled.div`
    width: 235px;

    @media only screen and (max-width: ${phone}){
      margin-bottom: 50px
    }
  `;

  const FooterContent = styled.div`
    width: 100%;
    padding-right: 9vw;
    padding-left: 9vw;
    padding-bottom: 72px;
    justify-content: space-between;

    @media only screen and (max-width: ${phone}){
      flex-direction: column;
      padding-bottom: 0;
    }
  `;

  return (
    <Footer className="fixed top0 right0 bottom0 left0 gradient-bg-h">
      <FooterContent className="absolute bottom0 flex">
        <FooterColumn>
          <h2 className="headline h2 mb-20">Du hast eine Idee?</h2>
          <Link text="Erzähl uns davon" link="mailto:contact"></Link>
        </FooterColumn>
        <FooterColumn>
          <h2 className="headline h2 mb-20">Folge uns</h2>
          <Link text="Instagram" link="http://"></Link>
        </FooterColumn>
        <FooterColumn>
          <h2 className="headline h2 mb-20">Kontakt</h2>
          <p>L.O.F.D.S. UG & Co. KG</p>
          <p>Josef-Orlopp-Strasse 92-106</p>
          <p>10365 Berlin</p>
        </FooterColumn>
      </FooterContent>
    </Footer>
  );
}
