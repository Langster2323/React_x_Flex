import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <div className="header-container">
      <h1>{this.props.title}</h1>
        <ul className="nav-container">
          <li className="item-1 Item">Item-1</li>
          <li className="item-2 Item">Item-2</li>
        </ul>
      </div>
    );
  }
}

Header.defaultProps = {
  title: 'React_X_Flex'
};

export default Header;
