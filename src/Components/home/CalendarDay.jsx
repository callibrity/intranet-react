import React from 'react';
import styled from 'styled-components'

export default function Calendar({day}) {

    return(
        <Container>
            <Label>{day}</Label>
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
`;

const Label = styled.div`
    padding: 5px;
    text-align: center;
`;