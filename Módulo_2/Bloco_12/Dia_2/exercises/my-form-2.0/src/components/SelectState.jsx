import React, { Component } from 'react';
import { allInitials, allStatesOfBrazil } from '../data';
class SelectState extends Component {
  render() {
    const { label, name, value, handleChange  } = this.props;

    return (
      <label htmlFor={ name }>
        { label }
        <select
        id={ name }
        name={ name }
        value={ value }
        required={ true }
        onChange={ handleChange }
        >
          {allStatesOfBrazil.map((state, index) => <option key={allInitials[index]} value={allInitials[index]}>{state}</option>)}
      </select>
    </label>
    );
  }
}

export default SelectState;