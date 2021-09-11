import React from 'react';

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
    <header className="header">
      {navLeft.map( item => <a href={'#' + item.anchor} className="header__item header__item--left">{item.name}</a>)}
      <img className="header__logo" src="https://static.wixstatic.com/media/d1bfd1_395f2a29389245deb2ad542d2fde779f~mv2.jpg/v1/fill/w_895,h_295,al_c,lg_1,q_80/Lofds%20Logog.webp"></img>
      {navRight.map( item => <a href={'#' + item.anchor} className="header__item header__item--right">{item.name}</a>)}
    </header>
  );
}

export default Header;
