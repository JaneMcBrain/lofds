import styled from 'styled-components';
import { colorLight, footerHeight, headerHeight, headerMobileHeight, phone, tablet } from '../assets/assets';
import Elements from './content/Elements/Elements';
import Intro from './content/Intro';
import Partners from './content/Partners/Partners';
import Project from './content/Project/Project';

export default function Content(){
  const Content = styled.div`
    background-color: ${colorLight};
    min-height: 800px;
    z-index: 1;
    padding-top: ${headerHeight};
    margin-bottom: ${footerHeight};
    overflow: hidden;

    @media only screen and (max-width: ${tablet}){
      padding-top: ${headerMobileHeight};
    }
    @media only screen and (max-width: ${phone}){
      margin-bottom: 527px;
    }
  `;

  return (
    <Content className="relative">
      <Intro></Intro>
      <Elements></Elements>
      <Project></Project>
      <Partners></Partners>
    </Content>
  );
}
