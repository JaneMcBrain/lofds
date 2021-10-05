import styled from 'styled-components';
import { colorDark, intro } from '../../assets/assets';
import { colorLight } from '../../assets/assets';
import image from '../../assets/images/intro-comic.jpg'

export default function Intro(){
  const Container = styled.div`
    background-color: ${colorDark};
    color: ${colorLight}
  `;

  const Image = styled.img`
    width: 600px;
  `;

  const Text = styled.p`
    padding-right: 15vw;
    padding-left: 15vw;
    column-count: 2;
    column-gap: 7vw;
  `;

  return (
    <Container>
      <Image src={image}></Image>
      <Button text={intro.button}></Button>
    </Container>
  );
}
