import {
  POPULAR_SERIES_LOAD,
  POPULAR_SERIES_LOAD_SUCCESS,
  POPULAR_SERIES_LOAD_FAIL,
} from '../actions/popularSeries';

const initialState = {
  loaded: false,
  loading: false,
};

export default function getPopularSeries(state = initialState, action) {
  switch (action.type) {
    case POPULAR_SERIES_LOAD:
      return {
        ...state,
        loaded: false,
        loading: true,
      };
    case POPULAR_SERIES_LOAD_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.payload.results,
        page: action.payload.page,
      };
    }
    case POPULAR_SERIES_LOAD_FAIL:
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
