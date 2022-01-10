import React from "react";
import { Container } from "../Global-styles/CreateGlobalStyles";
import {
  SighupBackground,
  SighupFormWrapper,
  Form,
} from "./SighupStyledElements";

const Sighup = () => {
  return (
    <SighupBackground>
      <Container>
        <SighupFormWrapper>
          <h6>Sign Up for Exclusive Offers </h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
            asperiores!
          </p>
          <Form>
            <input type="text" placeholder="Enter Your Name" />
            <input type="email" placeholder="Enter an email address" />
            <input type="number" placeholder="Telephone Number" />
            <textarea placeholder="Enter Your Message"></textarea>
            <button type="submit" value="Sign Up">
              Sign Up
            </button>
          </Form>
        </SighupFormWrapper>
      </Container>
    </SighupBackground>
  );
};

export default Sighup;
