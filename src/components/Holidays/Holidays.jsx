import React from "react";
import { Container, Section } from "../Global-styles/CreateGlobalStyles";
import { HolidayImages } from "./HolidaysData";
import {
  HolidaysContent,
  HolidaysContentTitleWrapper,
  IconWaves,
  ImagesDataWrapper,
} from "./HolidaysStyledElements";

const Holidays = () => {
  return (
    <Section>
      <Container>
        <HolidaysContent>
          <HolidaysContentTitleWrapper>
            <p>Beach Tour Packages</p>
            <IconWaves />
            <h5>Beach Holiday</h5>
          </HolidaysContentTitleWrapper>
          <ImagesDataWrapper>
            {HolidayImages.map((image) => {
              return <img src={image.image} key={image.id} alt="" />;
            })}
          </ImagesDataWrapper>
          <button>Learn More</button>
        </HolidaysContent>
      </Container>
    </Section>
  );
};

export default Holidays;
