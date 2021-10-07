import styled from 'styled-components';
import { intro } from '../../assets/assets';
import image from '../../assets/images/intro-comic.jpg'
import Button from '../common/Button/Button';
import HighlightText from '../common/HighlightText/HighlightText';

export default function Intro(){
  const imageWidth = '42vw';

  const Container = styled.div`
    padding-top: 100px;
    padding-bottom: 60px;
  `;

  const ImgDiv = styled.div`
    margin-left: -${imageWidth};
  `;

  const Image = styled.img`
    width: ${imageWidth};
    margin-bottom: 100px;
  `;

  const Title = styled.h1`
    width: 510px;
    top: 50px;
    left: 35vw;
    align-items: flex-start;
  `;

  const Text = styled.p`
    padding-right: 15vw;
    padding-left: 15vw;
    column-count: 2;
    column-gap: 100px;
  `;

  return (
    <Container className="flex dir-column align-center dark-bg">
      <ImgDiv className="relative">
        <Image src={image}></Image>
        <Title className="absolute flex dir-column headline h1 text-light">
          {intro.title.map(word => <HighlightText key={word} highlight="gradient-bg" text={word}></HighlightText>)}
        </Title>
      </ImgDiv>
      <Text className="mb-50 text-light">{intro.text}</Text>
      <Button text={intro.button}></Button>
    </Container>
  );
}
