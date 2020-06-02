import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { standardInput } from "../../globals/styles";



export default function SearchBar() {
  const [text, setText] = useState("");
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  ${standardInput}
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: left;
`;

const IconContainer = styled.div``;

const Search = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;
