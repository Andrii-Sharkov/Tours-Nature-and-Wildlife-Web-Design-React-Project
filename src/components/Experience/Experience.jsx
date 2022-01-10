import React from "react";
import { Container, Section } from "../Global-styles/CreateGlobalStyles";
import {
  ExperienceContent,
  ContentLeft,
  ContentMiddle,
  ContentRight,
  ContentRightText,
  ImageWrapper,
  SectionTitle,
  RectangleWrapper,
  Rectangle,
} from "./ExperienceStyledElements";
import ImageOceanCruise from "../../images/ocean-cruise.jpg";
const Experience = () => {
  return (
    <Section>
      <Container>
        <ExperienceContent>
          <ContentLeft>
            <SectionTitle>An Ocean Of Experiences</SectionTitle>
            <ImageWrapper>
              <img src={ImageOceanCruise} alt="" />
            </ImageWrapper>
          </ContentLeft>
          <ContentMiddle>
            <h5>Ocean Cruises</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              odio magni consectetur, nihil minus deserunt commodi officiis!
              Tempore beatae eaque nemo laborum, necessitatibus sequi corrupti.
            </p>
            <button>learn more</button>
          </ContentMiddle>
          <ContentRight>
            <ContentRightText>
              <h5>Sea Beaches</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                vel dolore minus accusantium eum ducimus eius sunt, quas
                consectetur et!
              </p>
              <button>learn more</button>
            </ContentRightText>
          </ContentRight>
        </ExperienceContent>
      </Container>
      <RectangleWrapper>
        <Rectangle />
      </RectangleWrapper>
    </Section>
  );
};

export default Experience;
