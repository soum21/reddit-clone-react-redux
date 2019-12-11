import React, { useState } from 'react';
import Landing from './pages/landing';
import { Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { addTitile } from './store/actions/testAction';
import TopicDetails from './pages/topicDetails';

function App(props) {
  const [newTitle, setTitle] = useState('');
  let titleChange = (e) => {
    setTitle(e.target.value)
  }
  function handleSubmit(){
    props.addTitile(props.topics.length+1,newTitle)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Nav>
          <Nav.Item>
            <input type="text" maxLength="255" placeholder="Add Title" value={newTitle} onChange={titleChange} style={{ width: "100%" }} />
          </Nav.Item>
          <Nav.Item>
            <button onClick={()=>handleSubmit()}>
              Add Topic
          </button>
          </Nav.Item>

        </Nav>
        <Switch>

          <Route path="/" component={() => <Landing />} exact />
          <Route path="/topic/:id" component={TopicDetails} />
        </Switch>
        {/* <Landing /> */}
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
      topics: state.test.topics
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTitile: (id,title) => {
      dispatch(addTitile(id,title))
  }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);


