import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  ${props => (props.left ? 'margin-right' : 'margin-left')}: 10px;
`;

const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 200px;
`;

function Header(){
  const navLeft = [
    {name: 'DinoSound', anchor: ''},
    {name: 'Tausendsassa', anchor: ''},
    {name: 'Aha Design', anchor: ''},
  ]
  const navRight = [
    {name: 'Label Sitter', anchor: ''},
    {name: 'System B', anchor: ''},
    {name: 'SaxophonRetrait', anchor: ''},
  ]

  return (
    <HeaderTag>
      {navLeft.map( item => <Link href={'#' + item.anchor} left>{item.name}</Link>)}
      <Image src="https://static.wixstatic.com/media/d1bfd1_395f2a29389245deb2ad542d2fde779f~mv2.jpg/v1/fill/w_895,h_295,al_c,lg_1,q_80/Lofds%20Logog.webp"></Image>
      {navRight.map( item => <Link href={'#' + item.anchor} right>{item.name}</Link>)}
    </HeaderTag>
  );
}

export default Header;
