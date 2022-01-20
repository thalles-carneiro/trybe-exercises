// src/InputsSum.js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sumValue1, sumValue2, sumValue3 } from './redux/actions';

class InputsSum extends React.Component {
  render() {
    const { sumValue1ToStore, sumValue2ToStore, sumValue3ToStore } = this.props;
    return (
      <div>
        <input
          type="number"
          data-testid="input1"
          placeholder="Digite um valor"
          onChange={ (e) => sumValue1ToStore(+e.target.value) }
        />
        <input
          type="number"
          data-testid="input2"
          placeholder="Digite um valor"
          onChange={ (e) => sumValue2ToStore(+e.target.value) }
        />
        <input
          type="number"
          data-testid="input3"
          placeholder="Digite um valor"
          onChange={ (e) => sumValue3ToStore(+e.target.value) }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sumValue1ToStore: (value) => dispatch(sumValue1(value)),
  sumValue2ToStore: (value) => dispatch(sumValue2(value)),
  sumValue3ToStore: (value) => dispatch(sumValue3(value)),
});

InputsSum.propTypes = {
  sumValue1ToStore: PropTypes.func.isRequired,
  sumValue2ToStore: PropTypes.func.isRequired,
  sumValue3ToStore: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(InputsSum);
