import React, { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import Logout from "./Logout";
import {Dropdown} from "react-bootstrap";



export default function Navbar() {
  const [text, setText] = useState("");
  const { username } = useContext(UserContext);

  return (
    <Container>
      <Link to="/">
        <Logo src="callibrity-logo.webp" alt="Callibrity Logo" />
      </Link>
      <SearchContainer>
        <IconContainer>
          <FaSearch />
        </IconContainer>
        <Search
          alt="search bar"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </SearchContainer>
      <NavLinks />
      <Dropdown >
        <Dropdown.Toggle data-testid="user-dropdown" as="a">{username}</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Logout />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}

const Container = styled.div`
  color: white;
  background-color: ${({ theme: { darkerBlue } }) => darkerBlue};
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
  width: 40%;
  height: 25px;
  justify-content: left;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.1);
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
