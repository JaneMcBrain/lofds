import styled from 'styled-components';
import { colorLight, footerHeight, headerHeight } from '../assets/assets';
import Intro from './content/Intro';

export default function Content(){
  const Content = styled.div`
    background-color: ${colorLight};
    min-height: 800px;
    z-index: 1;
    padding-top: ${headerHeight};
    margin-bottom: ${footerHeight}
  `;

  return (
    <Content className="relative">
      <Intro></Intro>
    </Content>
  );
}
