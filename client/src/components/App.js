import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import RegularNavBar from "./RegularNavBar";
import ProjectShow from "./ProjectShow";
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div style={styles.page}>
        <div style={styles.menu}>
          <RegularNavBar/>
        </div>
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/project/:id' component={ProjectShow} />
            <Route exact path='/projects' component={Projects} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

const styles = {
  page: {
    width: '100%',
    background: `url(https://res.cloudinary.com/kallasbeauty/image/upload/v1538772491/greyBrickBackground_ixdlb6.jpg) no-repeat center center fixed`,
    backgroundSize: 'cover',
    padding: '0px',
    height: '100%',
  },
  menu: {
    backgroundColor: '#808080',
  },
}

export default App;
