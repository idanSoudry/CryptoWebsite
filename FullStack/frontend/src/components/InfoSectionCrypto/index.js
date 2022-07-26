import React from "react";
import {
  InfoWrapper,
  InfoContainer,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  TopLine,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./InfoElements";
import { Button, Button2 } from "../ButtonElement";
import ChartData from "../Chart";

const InfoSection = ({
  dst,
  dst2,
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  button2Label,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button2
                    to={dst}
                    smooth={true.toString()}
                    duration={500}
                    spy={true.toString()}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button2>
                </BtnWrap>
                <BtnWrap>
                  <Button
                    to={dst2}
                    smooth={true.toString()}
                    duration={500}
                    spy={true.toString()}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {button2Label}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>{<Img src={img} alt={alt} />}</ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
