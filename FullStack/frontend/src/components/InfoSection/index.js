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
import { Button } from "../ButtonElement";

const InfoSection = ({
  dst,
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  small,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper small={small}>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper small={small}>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle small={small} darkText={darkText}>
                  {description}
                </Subtitle>
                <BtnWrap>
                  <Button
                    to={dst}
                    smooth={true}
                    duration={500}
                    spy={true.toString()}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap small={small}>{<Img src={img} alt={alt} />}</ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
