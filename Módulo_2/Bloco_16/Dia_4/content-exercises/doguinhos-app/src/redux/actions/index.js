export const END_POINT = 'https://dog.ceo/api/breeds/image/random';
export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const GET_IMAGE = 'GET_IMAGE';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const getImage = (json) => ({ type: GET_IMAGE, payload: json.message });

export const requestDog = () => ({ type: REQUEST_IMAGE });

export const failedRequest = (error) => ({ type: FAILED_REQUEST, payload: error });

export const fetchDogs = () => (dispatch) => {
  dispatch(requestDog());
  return fetch(END_POINT)
    .then((r) => r.json())
    .then(
      (json) => dispatch(getImage(json)),
      (error) => dispatch(failedRequest(error)),
    );
};
