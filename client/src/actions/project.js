import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

const setProjects = (projects) => {
  return { type: 'GET_PROJECTS', projects }
}

export const getProjects = () => {
  return dispatch => {
    axios.get('/api/projects')
      .then(res => {
        dispatch(setProjects(res.data))
      })
      .catch(err => {
        dispatch(setFlash('Error loading projects, please try again.', 'red'))
      })
  }
}