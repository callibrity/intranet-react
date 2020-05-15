import axios from 'axios';

export const baseURL = process.env.REACT_APP_API_URL;

export const calendarURL = `${process.env.REACT_APP_API_URL}/calendar`;

export const announcementURL = `${process.env.REACT_APP_API_URL}/announcements`;

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL
});
