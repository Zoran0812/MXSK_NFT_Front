import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const MainContainer = styled(Container)``;

const Error: React.FunctionComponent<any> = () => {

  return (
    <MainContainer>
      Not Exist!
    </MainContainer>
  );
};
export default Error;
