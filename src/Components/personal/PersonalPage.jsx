import React, { useEffect, useState } from "react";
import {parse} from "query-string";
import styled from "styled-components";
import API from "../../api";
import Summary from "./Summary";
import Details from "./Details";
import Header from "./Header";

export const initialMessage = "Loading employee";
export const errorMessage = "Could not retrieve data.";

export default function PersonalPage(props){
  const [employee, setEmployee] = useState(initialMessage);
  useEffect(() => {
    const {name} = parse(window.location.search);
    API.get(`/employees?queryName=${name}`)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        setEmployee(errorMessage);
      });
  }, []);

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