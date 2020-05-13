import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function NavLinks() {
    
    return(
        <Container>
            <StyledLink to="/wiki">Wiki</StyledLink>
            <StyledLink to="/people">People</StyledLink>
        </Container>
    )
}

const Container = styled.div`
    font-size: 17.6px;
    font-weight: 600;
    color: white;
`

const StyledLink = styled(Link)`
    padding: 8px;
    :hover {
        color: #dae0e5;
    }
`;
