import styled from 'styled-components';
import logoWhite from '../../../assets/images/get-inspired-white.svg';
import logoBlue from '../../../assets/images/get-inspired-blue.svg';
import useWindowScrollPosition from '../../../utils/hooks';
import { mailTo, tablet } from '../../../assets/assets';

interface ComponentProps{
  color: string;
  startFrom: number;
  scrollTo: number;
}

function GetInspired({color, startFrom, scrollTo}: ComponentProps){
  const windowPos = useWindowScrollPosition();
  const shouldScroll = () => windowPos > startFrom && windowPos < scrollTo;
  const isBlue = () => color === 'blue';

  const Icon = styled.img`
    right: 0px;
    top: ${isBlue() ? '50px' : '218px'};
    @media only screen and (max-width: ${tablet}){
      width: 154px;
      top: ${isBlue() ? '25px' : '59px'};
    }
  `;

  return(
    <a href={mailTo}>
      <Icon
        src={isBlue() ? logoBlue : logoWhite}
        className={shouldScroll() ? 'fixed icon-fixed' : 'absolute icon-absolute'}
        alt="Get inspired!"></Icon>
    </a>
  )
}

export default GetInspired;
