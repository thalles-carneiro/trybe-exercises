import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDogs } from './redux/actions';

function App({ isFetching, imagePath, getDogs }) {
  return (
    isFetching ? <p>Loading...</p>
      : (
        <div style={ { width: 500 } }>
          <button
            style={ { display: 'block' } }
            onClick={ getDogs }
            type="button"
          >
            New Dog
          </button>
          <img style={ { width: '100%' } } src={ imagePath } alt="dog" />
        </div>
      )
  );
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  getDogs: () => dispatch(fetchDogs()),
});

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  imagePath: PropTypes.string.isRequired,
  getDogs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
