import React from "react";
import {
  BigTitle,
  Button,
  Container,
  SectionSubtitle,
} from "../Global-styles/CreateGlobalStyles";
import {
  HomeSection,
  HomeContent,
  HomeTitleWrapper,
} from "./HomeStyledElements";

const Home = () => {
  return (
    <div>
      <HomeSection>
        <Container>
          <HomeContent>
            <HomeTitleWrapper>
              <BigTitle>Tours Nature & Wildlife</BigTitle>
              <SectionSubtitle>
                Fly with who you want, stay wherever you want — now that's a
                dream holiday!
              </SectionSubtitle>
              <Button>Learn More</Button>
            </HomeTitleWrapper>
          </HomeContent>
        </Container>
      </HomeSection>
    </div>
  );
};

export default Home;
