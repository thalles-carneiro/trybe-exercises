import React from 'react';
import { connect } from 'react-redux';
import { fetchDogs } from './redux/actions';

function App({ isFeatching, src, fetchDogs }) {
  return (
    isFeatching ? <p>Loading...</p>
    : (
      <div style={ { width: 500 } }>
        <button
          style={ { display: 'block' } }
          onClick={ fetchDogs }
          type="button"
        >
          New Dog
        </button>
        <img style={ { width: '100%' } } src={ src } alt="dog" />
      </div>
    )
  );
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFeatching: state.isFeatching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDogs: () => dispatch(fetchDogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
