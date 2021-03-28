const BASE_URL = 'https://swapi-trybe.herokuapp.com/api/planets';

export default function getPlanets() {
  return fetch(BASE_URL).then((response) => (
    response.ok
      ? response.json()
      : Promise.reject(new Error('Api error'))
  ));
}