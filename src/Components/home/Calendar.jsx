import React from 'react';
import styled from 'styled-components'
import CalendarDay from './CalendarDay';

export default function Calendar() {
    const list = [];
    for (let i = 1; i <= 35; i += 1){
        list.push(
            <CalendarDay day={i} />
        )
    }

    return(
        <Container>
            {list}
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 200px);
    grid-template-rows: repeat(5, 120px);
    grid-gap: 1px;
    background-color: gray;
    padding: 1px;
`;