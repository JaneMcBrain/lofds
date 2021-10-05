import styled from 'styled-components';
import { intro } from '../../assets/assets';
import image from '../../assets/images/intro-comic.jpg'
import Button from '../common/Button/Button';
import HighlightText from '../common/HighlightText/HighlightText';

export default function Intro(){
  const imageWidth = '42vw';

  const Container = styled.div`
    padding-top: 7vw;
    padding-bottom: 4vw;
  `;

  const ImgDiv = styled.div`
    margin-left: -${imageWidth};
  `;

  const Image = styled.img`
    width: ${imageWidth};
    margin-bottom: 7vw;
  `;

  const Title = styled.h1`
    top: 50px;
    right: -80%;
    align-items: flex-start;
  `;

  const TitleCol = styled.span`
    margin-bottom: 10px;
    padding: 6px 15px;
  `;

  const Text = styled.p`
    padding-right: 15vw;
    padding-left: 15vw;
    column-count: 2;
    column-gap: 7vw;
  `;

  return (
    <Container className="flex dir-column align-center dark-bg">
      <ImgDiv className="relative">
        <Image src={image}></Image>
        <Title className="absolute flex dir-column headline h1 text-light">
          {intro.title.map(word => <HighlightText highlight="gradient-bg" text={word}></HighlightText>)}
        </Title>
      </ImgDiv>
      <Text className="mb-50 text-light">{intro.text}</Text>
      <Button text={intro.button}></Button>
    </Container>
  );
}
