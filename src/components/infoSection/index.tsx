import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStyles";
import {
  Heading,
  Img,
  ImgWrapper,
  InfoColumn,
  InfoRow,
  InfoSec,
  SubTitle,
  TextWrapper,
  TopLine,
} from "./styles/InfoSection";

interface Props {
  lightBg?: boolean;
  imgStart?: boolean;
  lightTopLine?: boolean;
  topLine?: string;
  headline?: string;
  lightText?: boolean;
  lightTextDesc?: boolean;
  description?: string;
  primary?: boolean;
  start?: boolean;
  buttonLabel?: string;
  img?: string;
  alt?: string;
}

const InfoSection: React.FC<Props> = ({
  lightBg,
  imgStart,
  lightTopLine,
  topLine,
  headline,
  lightText,
  lightTextDesc,
  description,
  primary,
  buttonLabel,
  start,
  img,
  alt,
}) => {
  return (
    <InfoSec lightBg={lightBg}>
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
              <Link to="/signup">
                <Button big fontBig primary={primary}>
                  {buttonLabel}
                </Button>
              </Link>
            </TextWrapper>
          </InfoColumn>

          <InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default InfoSection;
