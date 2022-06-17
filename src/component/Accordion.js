import React from "react";
import styled from "styled-components";
import Icons from "./Icons";

const StyledAccordion = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-size: 50px;
  border-radius: 50px;
  width: 50px;
  padding: 10px;
  margin-left: 50px;
  background-color: whitesmoke;
  border: 2px solid grey;
`;

export default function Accordion() {
  return (
    <StyledAccordion>
      <Icons />
    </StyledAccordion>
  );
}
