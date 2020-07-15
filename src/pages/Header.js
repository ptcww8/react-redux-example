import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class Header extends Component {
  render() {
    const { tagline } = this.props;
    return (
      <div className="header">
        <h1>Demo Application</h1>
        <p>{tagline}</p>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    tagline: state.head.tagline
  }
}

export default connect(mapStateToProps)(Header);