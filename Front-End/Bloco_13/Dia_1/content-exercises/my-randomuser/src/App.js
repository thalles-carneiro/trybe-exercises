import React, { Component } from 'react';
import RandomUserInfos from './components/RandomUserInfos';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      randomUser: undefined,
    }

    this.handleAfterFetch = this.handleAfterFetch.bind(this);
  }

  async componentDidMount() {
    const API_URL = 'https://api.randomuser.me/';
    try {
      const response = await fetch(API_URL);
      const { results: [ randomUser ] } = await response.json();
      this.handleAfterFetch(randomUser);
    } catch(error) {
      console.log(error);
    }
  }

  shouldComponentUpdate(_nextProps, { randomUser: { dob: { age } } }) {
    return age <= 50;
  }

  handleAfterFetch(user) {
    this.setState(({ loading }) => ({
      loading: !loading,
      randomUser: user,
    }));
  }

  render() {
    const { loading, randomUser } = this.state;
    const loadingElement = <div>Carregando...</div>;
    return (
      <>
      { loading ? loadingElement : <RandomUserInfos randomUser={ randomUser } /> }
      </>
    );
  }
}

export default App;
