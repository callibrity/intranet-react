import React, { useReducer, useEffect } from "react";
import API from "../../globals/api";
import {parse} from "query-string";
import styled from "styled-components";
import Summary from "./Summary";
import Details from "./Details";
import Header from "./Header";
import {apiInitialMessage, apiErrorMessage} from "../../globals/constants";

function reducer(state, action) {
  const {type, load} = action;
  if(type === "initial"){
    return load;
  }
  if(type === "update") {
    return {
      ...state,
      ...load
    };
  }
}

export default function PersonalPage(){
  const [employee, setEmployee] = useReducer(reducer, apiInitialMessage);
  const {name} = parse(window.location.search);

  useEffect(() => {
    API.get(`/employees?name=${name}`)
      .then((res) => {
        setEmployee({type: "initial", load: res.data[0]});
      })
      .catch((err) => {
        setEmployee(apiErrorMessage);
      });
  }, [name]);

  return(
    <Container>
      <InnerContainer>
        <Header employee={employee}/>
        <LowerContainer>
          <div>
            <Summary employee={employee} setEmployee={setEmployee}/>
          </div>
          <div>
            <Details employee={employee} setEmployee={setEmployee}/>
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
  padding: 20px 0;
`;