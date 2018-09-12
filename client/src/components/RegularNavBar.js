import React, { Component} from 'react';
import { Menu } from 'semantic-ui-react';

class RegularNavBar extends Component {
  render() {
    return(
      <div style={styles.color}>
        <Menu pointing secondary>
        </Menu>
      </div>
    );
  }
}

const styles = {
  color: {
    color: 'black',
  }
}

export default RegularNavBar;