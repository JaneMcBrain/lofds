import styled from 'styled-components';
import FooterContent from './content/FooterContent';

export default function Footer(){
  const Footer = styled.footer`
    z-index: 0;
    padding-right: 9vw;
    padding-left: 9vw;
  `;

  return (
    <Footer className="fixed top0 right0 bottom0 left0 gradient-bg-h">
      <FooterContent classes="absolute bottom0 flex" />
    </Footer>
  );
}
