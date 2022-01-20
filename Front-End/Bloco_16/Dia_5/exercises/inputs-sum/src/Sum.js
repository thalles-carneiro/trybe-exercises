import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Sum extends React.Component {
  render() {
    const { sum } = this.props;
    return <div data-testid="sumNumbers">{ sum }</div>;
  }
}

const mapStateToProps = (state) => ({
  sum:
    state.sumReducer.value1 + state.sumReducer.value2 + state.sumReducer.value3 });

Sum.propTypes = {
  sum: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Sum);
