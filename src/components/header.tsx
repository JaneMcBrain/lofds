
import { useState } from 'react';
import styled from 'styled-components';
import { colorDark, colorLight, headerHeight, headerMobileHeight, navigation, tablet } from '../assets/assets';
import logo from '../assets/images/lofds-logo.svg'
import FooterContent from './content/FooterContent';

export default function Header(){
  const [iconClass, setIconClass] = useState<string>('');
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const mobileLinks = navigation.left.concat(navigation.right);

  const Link = styled.a`
  ${props => (props.left ? 'margin-right' : 'margin-left')}: 3vw;

  @media only screen and (max-width: ${tablet}){
    display: none;
  }
`;

  const HeaderTag = styled.header`
    height: ${headerHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colorDark};
    background-color: ${colorLight};
    z-index: 2;

    @media only screen and (max-width: ${tablet}){
      height: ${headerMobileHeight};
      padding-left: 22px;
      padding-right: 30px;
      justify-content: space-between;
    }
  `;

  const Image = styled.img`
    max-width: 200px;

    @media only screen and (max-width: ${tablet}){
      max-width: 145px;
    }
  `;

  const Icon = styled.div`
    display: none;
    position: relative;
    width: 27px;
    height: 47px;
    padding: 20px 0;
    cursor: pointer;

    ::before, ::after {
      transition: transform .5 ease;
      content: '';
      position: absolute;
      width: 27px;
      height: 1px;
      background-color: ${colorDark};
      transform: rotate(0);
    }

    ::before{
      top: 20px;
    }

    ::after{
      bottom: 20px;
    }

    &.is-active{
      ::before{
        transition: transform .5 ease;
        top: 23px;
        transform: rotate(45deg);
      }
    
      ::after{
        transition: transform .5 ease;
        bottom: 23px;
        transform: rotate(-45deg);
      }
    }

    @media only screen and (max-width: ${tablet}){
      display: block;
    }
  `;

  const MobileNav = styled.div`
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-right: 30px;
    padding-left: 30px;
    overflow: scroll
  `;

  const MobileLink = styled.a`
    margin-bottom: 39px;
  `;

  const onIconClick = () => {
    if(iconClass.length === 0){
      setIconClass('is-active');
    } else {
      setIconClass('');
    }
    setShowMobileNav(!showMobileNav);
  }

  const scrollToTop = () => {
    window.scroll({top: 0})
  }

  return (
    <HeaderTag className="fixed top0 right0 left0">
      {navigation.left.map( item => <Link key={item.name} href={'#' + item.anchor} left>{item.name}</Link>)}
      <Image src={logo} className="pointer" onClick={scrollToTop}></Image>
      {navigation.right.map( item => <Link key={item.name} href={'#' + item.anchor} right>{item.name}</Link>)}
      <Icon className={iconClass} onClick={onIconClick}></Icon>
      {showMobileNav &&
        <MobileNav className="gradient-bg">
          {mobileLinks.map(item =>
            <MobileLink 
              key={item.name}
              href={'#' + item.anchor}
              className="headline h2"
              onClick={onIconClick}>{item.name}</MobileLink>)
          }
          <FooterContent classes='mt-80'/>
        </MobileNav>
      }
    </HeaderTag>
  );
}
