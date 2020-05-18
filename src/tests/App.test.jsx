import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('full app rendering/navigating', () => {
  const { queryByText, getByText, getByAltText, queryByTestId } = render(<App />);
  let announcementElement = queryByText(/announcements/i);
  let calendarElement = queryByText(/calendar/i);
  let wikiElement = queryByText(/wiki check/i);
<<<<<<< HEAD
  let peopleElement = queryByText(/alec/i);
=======
  let peopleElement = queryByTestId(/people-page/i);
>>>>>>> 29fb151bfe129cc39ceff422029d412886c2ec39

  expect(announcementElement).toBeInTheDocument();
  expect(calendarElement).toBeInTheDocument();
  expect(wikiElement).not.toBeInTheDocument();
  expect(peopleElement).not.toBeInTheDocument();

  fireEvent.click(getByText(/wiki/i));
  announcementElement = queryByText(/announcements/i);
  calendarElement = queryByText(/calendar/i);
  wikiElement = queryByText(/wiki check/i);
<<<<<<< HEAD
  peopleElement = queryByText(/alec/i);
=======
  peopleElement = queryByTestId(/people-page/i);
>>>>>>> 29fb151bfe129cc39ceff422029d412886c2ec39
  expect(announcementElement).not.toBeInTheDocument();
  expect(calendarElement).not.toBeInTheDocument();
  expect(wikiElement).toBeInTheDocument();
  expect(peopleElement).not.toBeInTheDocument();

  fireEvent.click(getByText(/people/i));
  announcementElement = queryByText(/announcements/i);
  calendarElement = queryByText(/calendar/i);
  wikiElement = queryByText(/wiki check/i);
<<<<<<< HEAD
  peopleElement = queryByText(/alec/i);
=======
  peopleElement = queryByTestId(/people-page/i);
>>>>>>> 29fb151bfe129cc39ceff422029d412886c2ec39
  expect(announcementElement).not.toBeInTheDocument();
  expect(calendarElement).not.toBeInTheDocument();
  expect(wikiElement).not.toBeInTheDocument();
  expect(peopleElement).toBeInTheDocument();

  fireEvent.click(getByAltText(/callibrity logo/i));
  announcementElement = queryByText(/announcements/i);
  calendarElement = queryByText(/calendar/i);
  wikiElement = queryByText(/wiki check/i);
<<<<<<< HEAD
  peopleElement = queryByText(/alec/i);
=======
  peopleElement = queryByTestId(/people-page/i);
>>>>>>> 29fb151bfe129cc39ceff422029d412886c2ec39
  expect(announcementElement).toBeInTheDocument();
  expect(calendarElement).toBeInTheDocument();
  expect(wikiElement).not.toBeInTheDocument();
  expect(peopleElement).not.toBeInTheDocument();
});
