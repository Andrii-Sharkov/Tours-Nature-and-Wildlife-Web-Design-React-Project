import React from "react";
import {
  Button,
  Container,
  Section,
} from "../Global-styles/CreateGlobalStyles";
import {
  DealsContent,
  ImageContentRowTop,
  ImageWrapperOne,
  ImageWrapperTwo,
  ImageContentRowBottom,
  ImageWrapperThree,
  ImageWrapperFour,
  DealsContentTextRow,
  DealsContentTextLeft,
  DealsContentTextRight,
} from "./DealsStyledElements";
import Image2 from "../../images/girls-and-dog.jpg";
import Image3 from "../../images/sunset-beach.jpg";
import Image4 from "../../images/couple-beach.jpg";
import Image5 from "../../images/dog-beach.jpg";

const Deals = () => {
  return (
    <Section backgroundColorCream>
      <Container>
        <DealsContent>
          <ImageContentRowTop>
            <ImageWrapperOne>
              <img src={Image2} alt="" />
            </ImageWrapperOne>
            <ImageWrapperThree>
              <img src={Image3} alt="" />
            </ImageWrapperThree>
          </ImageContentRowTop>
          <ImageContentRowBottom>
            <ImageWrapperTwo>
              <img src={Image4} alt="" />
            </ImageWrapperTwo>
            <ImageWrapperFour>
              <img src={Image5} alt="" />
            </ImageWrapperFour>
          </ImageContentRowBottom>
        </DealsContent>
        <DealsContentTextRow>
          <DealsContentTextLeft>
            <h3>Travel Packages and Deals</h3>
          </DealsContentTextLeft>
          <DealsContentTextRight>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate amet, enim porro cum perferendis sint velit minus eaque
              nulla repellendus deleniti quis error magnam ipsum?
            </p>
            <Button hoverTextColor="black">Learn More</Button>
          </DealsContentTextRight>
        </DealsContentTextRow>
      </Container>
    </Section>
  );
};

export default Deals;
