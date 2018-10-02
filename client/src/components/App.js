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

class App extends Component {
  render() {
    return (
      <div>
        <div style={styles.menu}>
          <RegularNavBar/>
        </div>
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/project/:id' component={ProjectShow} />
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
  menu: {
    backgroundColor: '#808080',
  }
}

export default App;
