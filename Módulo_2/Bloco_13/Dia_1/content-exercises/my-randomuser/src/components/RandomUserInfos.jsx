import React, { Component } from 'react';

class RandomUserInfos extends Component {
  render() {
    const {
      randomUser: {
      name: { title, first, last },
      email,
      dob: { age },
      picture: { large }
      }
    } = this.props;

    return (
      <section>
        <img src={ large } alt={`${ title }. ${ first } ${ last }`} />
        <p>{`Nome: ${ title }. ${ first } ${ last }`}</p>
        <p>{`E-mail: ${ email }`}</p>
        <p>{`Idade: ${ age }`}</p>
      </section>
    );
  }
}

export default RandomUserInfos;
