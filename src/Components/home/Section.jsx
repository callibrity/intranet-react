// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component
export default function Section({ label, color, children }) {

  return (
    <Container>
      <GroupHeader color={color}>
        <h1>{label}</h1>
      </GroupHeader>
      {children}
    </Container>
  );
}

// Styling
const Container = styled.section`
  display: inline-block;
  margin: 20px 0;
  background-color: white;
  border-bottom: 1px solid rgba(0,0,0,0.4);
  padding: 10px;
    border-radius: 5px;
`;

const GroupHeader = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: 500;
  border-bottom: 1px solid ${({color}) => color};
  margin-bottom: 10px;

  
  @media (max-width: 1000px) {
    font-size: 20px;
  };
  
`;

const Activities = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
`;

const IconContainer = styled.div`
  cursor: pointer;
  color: gray;
  font-size: 16px;
  display:flex;
  align-items:center;
  display: flex;
`;
