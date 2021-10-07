import styled from 'styled-components';
import { colorLight, footerHeight, headerHeight } from '../assets/assets';
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
