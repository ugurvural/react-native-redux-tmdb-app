import {
  PERSONS_LOAD,
  PERSONS_LOAD_SUCCESS,
  PERSONS_LOAD_FAIL,
} from '../actions/popularPersons';

const initialState = {
  loaded: false,
  loading: false,
};

export default function popularPersons(state = initialState, action) {
  switch (action.type) {
    case PERSONS_LOAD:
      return {
        ...state,
        loaded: false,
        loading: true,
      };
    case PERSONS_LOAD_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.payload.results,
        page: action.payload.page,
      };
    }
    case PERSONS_LOAD_FAIL:
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
