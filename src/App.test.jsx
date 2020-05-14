import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

test('renders sections', () => {
  const { queryByText } = render(<App />);
  const announcementElement = queryByText(/announcements/i);
  const calendarElement = queryByText(/calendar/i);
  expect(announcementElement).toBeInTheDocument();
  expect(calendarElement).toBeInTheDocument();
});

test('full app rendering/navigating', () => {
  const { queryByText, getByText, getByAltText } = render(<App />);
  let announcementElement = queryByText(/announcements/i);
  let calendarElement = queryByText(/calendar/i);
  let wikiElement = queryByText(/wiki check/i);
  let peopleElement = queryByText(/people check/i);

  expect(announcementElement).toBeInTheDocument();
  expect(calendarElement).toBeInTheDocument();
  expect(wikiElement).not.toBeInTheDocument();
  expect(peopleElement).not.toBeInTheDocument();

  fireEvent.click(getByText(/wiki/i));
  announcementElement = queryByText(/announcements/i);
  calendarElement = queryByText(/calendar/i);
  wikiElement = queryByText(/wiki check/i);
  peopleElement = queryByText(/people check/i);
  expect(announcementElement).not.toBeInTheDocument();
  expect(calendarElement).not.toBeInTheDocument();
  expect(wikiElement).toBeInTheDocument();
  expect(peopleElement).not.toBeInTheDocument();

  fireEvent.click(getByText(/people/i));
  announcementElement = queryByText(/announcements/i);
  calendarElement = queryByText(/calendar/i);
  wikiElement = queryByText(/wiki check/i);
  peopleElement = queryByText(/people check/i);
  expect(announcementElement).not.toBeInTheDocument();
  expect(calendarElement).not.toBeInTheDocument();
  expect(wikiElement).not.toBeInTheDocument();
  expect(peopleElement).toBeInTheDocument();

  fireEvent.click(getByAltText(/callibrity logo/i));
  announcementElement = queryByText(/announcements/i);
  calendarElement = queryByText(/calendar/i);
  wikiElement = queryByText(/wiki check/i);
  peopleElement = queryByText(/people check/i);
  expect(announcementElement).toBeInTheDocument();
  expect(calendarElement).toBeInTheDocument();
  expect(wikiElement).not.toBeInTheDocument();
  expect(peopleElement).not.toBeInTheDocument();
});
