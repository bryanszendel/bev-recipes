import axios from 'axios';

export const FETCH_BEERLIST_DATA_START = 'FETCH_BEERLIST_DATA_START';
export const FETCH_BEERLIST_DATA_SUCCESS = 'FETCH_BEERLIST_DATA_SUCCESS';
export const FETCH_BEERLIST_DATA_FAILURE = 'FETCH_BEERLIST_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_BEERLIST_DATA_START });
    axios
      .get('https://api.punkapi.com/v2/beers/')
      .then(res => {
        dispatch({ type: FETCH_BEERLIST_DATA_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: FETCH_BEERLIST_DATA_FAILURE, payload: err.response })
      })
  }
}