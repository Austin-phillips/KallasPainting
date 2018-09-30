const projects = (state = [], action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return action.projects
    default:
      return state;
  }
}

export default projects;