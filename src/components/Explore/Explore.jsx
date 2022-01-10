import React from "react";
import { Button, Container } from "../Global-styles/CreateGlobalStyles";
import {
  ExploreBackground,
  ExploreContent,
  ExploreTitleWrapper,
} from "./ExploreStyledElements";

const Explore = () => {
  return (
    <ExploreBackground>
      <Container>
        <ExploreContent>
          <ExploreTitleWrapper>
            <h4>Explore more with Sea Tours</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae tempore, voluptas quae assumenda consectetur beatae!
              mollitia.
            </p>
            <Button>Learn More</Button>
          </ExploreTitleWrapper>
        </ExploreContent>
      </Container>
    </ExploreBackground>
  );
};

export default Explore;
