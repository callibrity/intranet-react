import React, {useState} from 'react';
import styled from 'styled-components'
import CalendarDay from './CalendarDay';
import getCalendar from './getCalendar';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function Calendar() {
    const [date, setDate] = useState(new Date());
    const calendarList = getCalendar(date.getFullYear(), date.getMonth());
    const list = calendarList.map((ele, i) => <CalendarDay day={ele} key={i}/> );

    return(
        <Container>
            <DateContainer>
                <TodayButton onClick={() => setDate(new Date())}>
                    Today
                </TodayButton>
                <ChangeDate>
                    <FaChevronLeft onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))}/>
                    <FaChevronRight onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))}/>
                </ChangeDate>
                <DateDisplay>
                    {`${monthNames[date.getMonth()]} ${date.getFullYear()}`}
                </DateDisplay>
            </DateContainer>
            <MonthContainer>
                {list}
            </MonthContainer>
        </Container>
    )
}

const Container = styled.div`

`;

const MonthContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 200px);
    grid-template-rows: repeat(5, 120px);
    grid-gap: 1px;
    background-color: gray;
    padding: 1px;
`;

const DateContainer = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
`;

const TodayButton = styled.div``;

const ChangeDate = styled.div``;

const DateDisplay = styled.div``;