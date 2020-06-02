import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import QuickLinks from "./QuickLinks";
import { linkStyle } from "../../globals/styles";

export default function NavLinks() {
  return (
    <Container>
      <StyledLink to="/wiki">Wiki</StyledLink>
      <StyledLink to="/people">People</StyledLink>
      <QuickLinks />
    </Container>
  );
}

const Container = styled.div`
  display: flex;  
  font-size: 17.6px;
  font-weight: 600;
  color: white;
`;

const StyledLink = styled(Link)`
    ${linkStyle}
`;
