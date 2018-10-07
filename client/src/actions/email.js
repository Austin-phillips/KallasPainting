import axios from 'axios';
import { setFlash } from './flash';

export const sendEmail = (email) => {
  return (dispatch) => {
    axios.post(`/api/send_email`, { email })
      .then(res => {
        dispatch(setFlash('Email Recieved, Thank you', 'green'))      })
      .catch(err => {
        dispatch(setFlash('Failed to add service', 'red'))
      })
  }
}