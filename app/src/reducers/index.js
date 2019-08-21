
import {
  FETCH_BEERLIST_DATA_START,
  FETCH_BEERLIST_DATA_SUCCESS,
  FETCH_BEERLIST_DATA_FAILURE
} from '../actions'

const initialState = {
  beers: [],
  isLoading: false,
  error: ''
}

export const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEERLIST_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case FETCH_BEERLIST_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          beers: action.payload,
          error: ''
        }
    case FETCH_BEERLIST_DATA_FAILURE:
        return {
          
        }
            
    default:
      return state;
  }
}