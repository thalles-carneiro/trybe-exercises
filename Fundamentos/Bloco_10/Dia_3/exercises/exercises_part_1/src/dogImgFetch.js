const API_URL = 'https://dog.ceo/api/breeds/image/random';

function dogImgFetch() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(error => reject(error))
}

//(GABARITO)
// function fetchDog() {
//   return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
//     response
//       .json()
//       .then(json =>
//         response.ok ? Promise.resolve(json) : Promise.reject(json)
//       )
//   );
// }
// module.exports = { fetchDog };

module.exports = dogImgFetch;