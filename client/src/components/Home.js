import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Posts from './components/Posts'



class Home extends Component {
  state = { posts: [] }

  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Home Component</Header>
        < Link to="/api/posts"> View All Posts </Link>

      </div>
    )
  }
}

export default Home;
