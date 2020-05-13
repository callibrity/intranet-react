import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa'
import styled from 'styled-components'
import NavLinks from './NavLinks'
import {Link} from 'react-router-dom'


export default function Navbar() {
    
    const [text, setText] = useState("Hello")

    return(
        <Container>
            <Link to="/">
              <Logo src="https://www.callibrity.com/hubfs/Callibrity_December2018%20Theme/Images/callibrity-logo.png" />
            </Link>
            <Search value={text} onChange={(e) => {setText(e.target.value)}} ></Search>
            <NavLinks />
        </Container>
    )
}

const Container = styled.div`
    background-color: #343a40;
    color: white;
    font-size: 16px;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
`

const Logo = styled.img`
    width: 132px;
`

const Search = styled.textarea`
    background-color: white;
    color: black;
    width: 200px;
    height: 20px;
    justify-content: left;
`