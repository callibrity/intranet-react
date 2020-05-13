import React from 'react';
import Calendar from './home/Calendar';
import styled from 'styled-components';

export default function Homepage() {
    return(
        <Container>
            <Calendar />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`;