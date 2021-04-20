import {
  SERIES_LOAD,
  SERIES_LOAD_SUCCESS,
  SERIES_LOAD_FAIL,
} from '../actions/series';

const initialState = {
  loaded: false,
  loading: false,
  data: [],
};

export default function series(state = initialState, action) {
  switch (action.type) {
    case SERIES_LOAD:
      return {
        ...state,
        loaded: false,
        loading: true,
        data: [],
      };
    case SERIES_LOAD_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.payload,
      };
    }
    case SERIES_LOAD_FAIL:
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
