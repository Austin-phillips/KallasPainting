const projects = (state = [], action) => {
  switch (action.type) {
    case 'GET_HOMEPROJECTS':
      return action.projects
    case 'GET_SINGLE':
      return action.projects
    default:
      return state;
  }
}

export default projects;