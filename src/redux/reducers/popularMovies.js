import {
  POPULAR_MOVIES_LOAD,
  POPULAR_MOVIES_LOAD_SUCCESS,
  POPULAR_MOVIES_LOAD_FAIL,
} from '../actions/popularMovies';

const initialState = {
  loading: false,
  loaded: false,
};

export default function getPopularMoives(state = initialState, action) {
  switch (action.type) {
    case POPULAR_MOVIES_LOAD:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case POPULAR_MOVIES_LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload.results,
        page: action.payload.page,
      };
    }
    case POPULAR_MOVIES_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return state;
  }
}
