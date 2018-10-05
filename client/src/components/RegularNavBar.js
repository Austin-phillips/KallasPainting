import React, { Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class RegularNavBar extends Component {

  render() {
    return(
      <div style={styles.menu}>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item style={styles.item} name='Home' />
          </Link>
          <Link to='/projects'>
            <Menu.Item style={styles.item} name='Projects' />
          </Link>
          <Link to='/contact'>
            <Menu.Item style={styles.item} name='Contact Us' />
          </Link>
        </Menu>
      </div>
    );
  }
}

const styles = {
  menu: {
    backgroundColor: 'black'
  },
  item: {
    color: 'white'
  }
}

export default withRouter(RegularNavBar);