import React from 'react';
import styled from 'styled-components';
import { colorDark, colorLight, headerHeight, navigation } from '../assets/assets';

const Link = styled.a`
  text-decoration: none;
  ${props => (props.left ? 'margin-right' : 'margin-left')}: 3vw;
`;

const HeaderTag = styled.header`
  height: ${headerHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colorDark};
  background-color: ${colorLight};
  z-index: 2;
`;

const Image = styled.img`
  max-width: 200px;
`;

export default function Header(){

  return (
    <HeaderTag className="fixed top0 right0 left0">
      {navigation.left.map( item => <Link key={item.name} href={'#' + item.anchor} left>{item.name}</Link>)}
      <Image src="https://static.wixstatic.com/media/d1bfd1_395f2a29389245deb2ad542d2fde779f~mv2.jpg/v1/fill/w_895,h_295,al_c,lg_1,q_80/Lofds%20Logog.webp"></Image>
      {navigation.right.map( item => <Link key={item.name} href={'#' + item.anchor} right>{item.name}</Link>)}
    </HeaderTag>
  );
}
