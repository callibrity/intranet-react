import React from "react";
import {parse} from "query-string";
import styled from "styled-components";
import useAPI from "../../hooks/useAPI";
import Summary from "./Summary";
import Details from "./Details";
import Header from "./Header";

export default function PersonalPage(){
  const {name} = parse(window.location.search);
  const employee = useAPI(`/employees?queryName=${name}`);

  return(
    <Container>
      <InnerContainer>
        <Header />
        <LowerContainer>
          <div>
            <Summary employee={employee[0]}/>
          </div>
          <div>
            <Details employee={employee[0]}/>
          </div>
        </LowerContainer>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 16px;
`;

const InnerContainer = styled.div`
  max-width: 1000px;
`;

const LowerContainer = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: 1fr 2fr;
`;