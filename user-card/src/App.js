import React from 'react';
import './App.css';
import UserCard from './Components/Usercard';

import React, { Component } from 'react'

class App extends Component {
  state={
    userName: 'blevs',
    user: {},
    followers: []
  }
  changeUserName = (userName) => {
    
  }

  componentDidMount(){
    fetch(`https://api.github.com/users/${this.state.username}`)
    .then(res => res.json())
    .then(data => this.setState({user:data}));
    fetch(`https://api.github.com/users/${this.state.userName}/followers`)
    .then(res => res.json())
    .then(data => this.setState({followers:data}));
  }
  render() {
    return (
      <div>
        <UserCard user={this.state.user} followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;
