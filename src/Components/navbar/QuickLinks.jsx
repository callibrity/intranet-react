import React from "react";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import { quickLinks } from "../../constants";

export default function QuickLinks() {
  return (
    <Container>
      <Dropdown>
        <Dropdown.Toggle data-testid="links-dropdown" as="a">
          Quick Links
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {quickLinks.data.map(({ title, url }) => (
            <Dropdown.Item key={title} href={url}>
              {title}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}

const Container = styled.div`
  padding: 8px;
  :hover {
    color: #dae0e5;
  }
`;