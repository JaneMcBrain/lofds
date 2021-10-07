
import styled from 'styled-components';
import { colorDark, colorLight, headerHeight, headerMobileHeight, navigation, phone, tablet } from '../assets/assets';

const Link = styled.a`
  text-decoration: none;
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

const Icon = styled.span`
  display: none;
  position: relative;
  width: 27px;
  height: 7px;
  margin: 20px 0;
  cursor: pointer;

  ::before, ::after {
    content: '';
    position: absolute;
    width: 27px;
    height: 1px;
    background-color: ${colorDark};
  }

  ::before{
    top: 0;
  }

  ::after{
    bottom: 0;
  }

  &.is-active{
    ::before{
      top: 3px;
      transform: rotate(45deg);
    }
  
    ::after{
      bottom: 3px;
      transform: rotate(-45deg);
    }
  }

  @media only screen and (max-width: ${tablet}){
    display: block;
  }
`;

export default function Header(){

  return (
    <HeaderTag className="fixed top0 right0 left0">
      {navigation.left.map( item => <Link key={item.name} href={'#' + item.anchor} left>{item.name}</Link>)}
      <Image src="https://static.wixstatic.com/media/d1bfd1_395f2a29389245deb2ad542d2fde779f~mv2.jpg/v1/fill/w_895,h_295,al_c,lg_1,q_80/Lofds%20Logog.webp"></Image>
      {navigation.right.map( item => <Link key={item.name} href={'#' + item.anchor} right>{item.name}</Link>)}
      <Icon></Icon>
    </HeaderTag>
  );
}
