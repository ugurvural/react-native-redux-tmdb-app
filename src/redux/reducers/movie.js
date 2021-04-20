import {
  MOVIE_LOAD,
  MOVIE_LOAD_SUCCESS,
  MOVIE_LOAD_FAIL,
} from '../actions/movie';

const initialState = {
  loaded: false,
  loading: false,
};

export default function movie(state = initialState, action) {
  switch (action.type) {
    case MOVIE_LOAD:
      return {
        ...state,
        loaded: false,
        loading: true,
      };
    case MOVIE_LOAD_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.payload,
      };
    }
    case MOVIE_LOAD_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
