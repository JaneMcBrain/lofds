import styled from 'styled-components';
import { colorLight, footerHeight } from '../assets/assets';

export default function Content(){
  const Content = styled.div`
    background-color: ${colorLight};
    min-height: 800px;
    z-index: 1;
    margin-bottom: ${footerHeight}
  `;

  return (
    <Content className="relative">
      Test
    </Content>
  );
}
