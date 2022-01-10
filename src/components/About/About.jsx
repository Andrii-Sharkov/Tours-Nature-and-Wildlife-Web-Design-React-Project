import React from "react";
import {
  BigTitle,
  Container,
  Section,
} from "../Global-styles/CreateGlobalStyles";
import {
  AboutContent,
  AboutContentLeft,
  AboutContentRight,
  VerticalSquare,
} from "./AboutStyledElements";
import Image1 from "../../images/girl-beach.jpg";

const About = () => {
  return (
    <Section testAnimation>
      <Container>
        <AboutContent>
          <AboutContentLeft>
            <BigTitle chocolateColor width300 fontSize4>
              Luxury Beach Resorts
            </BigTitle>
            <VerticalSquare />
          </AboutContentLeft>
          <AboutContentRight>
            <img src={Image1} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, dolore fugit. Animi numquam accusantium sed illum
              praesentium libero? Maiores eius exercitationem incidunt harum
              suscipit rerum aliquid, tenetur delectus natus dignissimos!
            </p>
          </AboutContentRight>
        </AboutContent>
      </Container>
    </Section>
  );
};

export default About;
