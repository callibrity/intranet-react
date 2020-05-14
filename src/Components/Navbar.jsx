import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [text, setText] = useState();

  return (
    <Container>
      <Link to="/">
        <Logo src="https://www.callibrity.com/hubfs/Callibrity_December2018%20Theme/Images/callibrity-logo.png" alt="Callibrity Logo" />
      </Link>
      <SearchContainer>
        <IconContainer>
          <FaSearch />
        </IconContainer>
        <Search placeHolder="Search" value={text} onChange={(e) => { setText(e.target.value); }} />
      </SearchContainer>
      <NavLinks />
    </Container>
  );
}

const Container = styled.div`
    background-color: #343a40;
    font-size: 16px;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
`;

const Logo = styled.img`
    width: 132px;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 600px;
    height: 25px;
    justify-content: left;
    box-shadow: inset 0 1px 0 rgba(0,0,0,0.1);
    border-color: #bbbbbb #cfcfcf #e0e0e0 #cfcfcf;
    border-radius: 3px;
    padding: 5px;
`;

const IconContainer = styled.div``;

const Search = styled.input`
    width: 100%;
    border: none;
    outline: none;
`;
