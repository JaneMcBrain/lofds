import styled from 'styled-components';
import { intro, phone } from '../../assets/assets';
import image from '../../assets/images/intro-comic.jpg'
import Button from '../common/Button/Button';
import HighlightText from '../common/HighlightText/HighlightText';
import inspiredImg from '../../assets/images/get-inspired-white.svg';

export default function Intro(){
  const imageWidth = '42vw';

  const Container = styled.div`
    padding-top: 100px;
    padding-bottom: 60px;

    @media only screen and (max-width: ${phone}){
      padding: 50px 30px;
    }
  `;

  const ImgDiv = styled.div`
    margin-left: -${imageWidth};

    @media only screen and (max-width: ${phone}){
      margin-left: 0;
    }
  `;

  const Image = styled.img`
    width: ${imageWidth};
    margin-bottom: 100px;

    @media only screen and (max-width: ${phone}){
      width: 100%;
      margin-bottom: 176px;
    }
  `;

  const Title = styled.h1`
    width: 510px;
    top: 50px;
    left: 35vw;
    align-items: flex-start;

    @media only screen and (max-width: ${phone}){
      bottom: 81px;
      left: 12px;
      top: inherit;
    }
  `;

  const Text = styled.p`
    padding-right: 15vw;
    padding-left: 15vw;
    column-count: 2;
    column-gap: 7vw;

    @media only screen and (max-width: ${phone}){
      column-count: 1;
      padding: 0px;
    }
  `;

  const Icon = styled.img`
    position: absolute;
    right: 130px;
    top: 218px;
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
      <Button text={intro.button.text} link={intro.button.link}></Button>
      <Icon src={inspiredImg} alt="Get inspired!"></Icon>
    </Container>
  );
}
