import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, setCounterTitle } from "../actions/counterActions";
import { setTagline } from "../actions/headActions";
import { getUserList } from '../asyncActions/userAsyncActions';
 
class Content extends Component {
  
  constructor(props){
    super(props)
    this.state={
      tagline: this.props.tagline,
      contenttitle: this.props.counterObj.counterTitle
    }
  }
  
  componentDidMount() {
    this.props.getUserList();
  }
  
  
  
  render() {
    const {tagline, contenttitle} = this.state
    const {incrementCounter, decrementCounter, setTagline, counterObj, setCounterTitle, userObj  } = this.props
    
    return (
      <div className="main">
        
         <table className="table table-striped table-bordered">
          <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {userObj.data && userObj.data.data.map((x, i) => 
            <tr key={i}>
              <td>{x.first_name}</td>
              <td>{x.last_name}</td>
              <td>{x.email}</td>
              <td><img src={x.avatar} width="40" height="40" /></td>
            </tr>)}
          </tbody>
        </table>
        
        
        
        
        
        
        
        
        
        <div style={{ marginBottom: 20 }}>
          <h2>{counterObj.counterTitle}: {counterObj.count}</h2>
          <input type="button" className="btn" style={{ marginRight: 10 }} value="+1" onClick={incrementCounter} />
          <input type="button" className="btn" value="-1" onClick={decrementCounter} />
        </div>
        
        <div style={{ marginBottom: 20 }}>
     
          Tagline: <input type="text" className="tagline"  value={tagline} onChange={e => this.setState({ tagline: e.target.value })} />
          <input type="button" style={{ padding: '5px 7px', marginLeft: 10, width: 100 }} value="Set" onClick={() => setTagline(tagline)} />
        </div>
        
 
 <div style={{ marginBottom: 20 }}>
     
          Content Title: <input type="text" className="tagline"  value={contenttitle} onChange={e => this.setState({ contenttitle: e.target.value })} />
          <input type="button" style={{ padding: '5px 7px', marginLeft: 10, width: 100 }} value="Set" onClick={() => setCounterTitle(contenttitle)} />
        </div>
        
        
        
        <h2>Lorem ipsum dolor</h2>
        <h5>quam pellentesque, Dec 10, 2018</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Nisi vitae suscipit..</p>
        <p>Semper quis lectus nulla at. Nullam ac tortor vitae purus faucibus ornare suspendisse. Nunc faucibus a pellentesque sit. Risus quis varius quam quisque id diam vel quam elementum. Ornare aenean euismod elementum nisi quis eleifend quam.</p>
        <br />
        <h2>Placerat vestibulum</h2>
        <h5>elementum integer enim neque, Sep 21, 2018</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Bibendum est ultricies..</p>
        <p>Semper quis lectus nulla at. Nullam ac tortor vitae purus faucibus ornare suspendisse. Nunc faucibus a pellentesque sit. Risus quis varius quam quisque id diam vel quam elementum.</p>
      </div>
    );
  }
}
 
const mapStateToProps = (state) => {
  return {
    counterObj: state.counter,
    tagline: state.head.tagline,
    userObj: state.user
  }
}
 
const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  setTagline,
  setCounterTitle,
  getUserList 
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Content);