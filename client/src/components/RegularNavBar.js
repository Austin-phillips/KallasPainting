import React, { Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

const Navs = ['Home', 'Projects', 'Contact Us']

class RegularNavBar extends Component {
  state = { activeNav: Navs[0] }

  handleClick = (e, { name }) => this.setState({ activeNav: name })

  render() {
    const {activeNav} = this.state
    return(
      <div>
        <Menu inverted fixed>
          {Navs.map(nav => (
            <Menu.Item
              key={nav}
              name={nav}
              active={activeNav === nav}
              color ='grey'
              onClick={this.handleClick}
            />
          ))}
        </Menu>
      </div>
    );
  }
}

export default withRouter(RegularNavBar);