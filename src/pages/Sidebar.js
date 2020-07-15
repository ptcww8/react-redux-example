import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetCounter } from "../actions/counterActions";
import { getUserList } from '../asyncActions/userAsyncActions';
 
class Sidebar extends Component {
  render() {
    const {resetCounter, counterObj, userObj, getUserList } = this.props
    let total_pages = 0
    if (userObj.data && userObj.data.total_pages)
    {
      total_pages = userObj.data.total_pages
    }
    return (
      <div className="side">
        {userObj.data && userObj.data.total_pages && Array.from(Array(userObj.data.total_pages).keys()).map(x => x + 1).map(x => (
          <input key={x} type="button" style={{ marginRight: 5 }} className={`btn${x === userObj.data.page ? ' active' : ''}`} value={x}
            onClick={() => getUserList(x)} />
        ))}
        <br />
        {userObj.loading && <div style={{ marginTop: 10 }}>Fetching user details...</div>}
        
         
        
        <h2>{counterObj.counterTitle}: {counterObj.count}</h2>
        <input type="button" className="btn" value="Reset Counter" onClick={resetCounter} />
        
        
        <h2>Arcu bibendum</h2>
        <h5>Sit amet mattis vulputate</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Non blandit massa enim nec dui nunc mattis enim. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla..</p>
        <h3>Massa enim</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <div className="fakeimg" style={{ height: 60 }}>Image</div><br />
        <div className="fakeimg" style={{ height: 60 }}>Image</div><br />
        <div className="fakeimg" style={{ height: 60 }}>Image</div>
      </div>
    );
  }
}
 
const mapStateToProps = (state) => {
  return {
    counterObj: state.counter,
    userObj: state.user
  }
}
 
const mapDispatchToProps = {
  resetCounter,
  getUserList
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);