import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function NavLinks() {
    
    return(
        <Container>
            <Link to="/wiki">Wiki</Link>
            <Link to="/people">People</Link>
        </Container>
    )
}

const Container = styled.div`

`
