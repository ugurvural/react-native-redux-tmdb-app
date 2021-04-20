import axios from '../../libs/axios';

export const POPULAR_MOVIES_LOAD = Symbol('POPULAR_MOVIES_LOAD');
export const POPULAR_MOVIES_LOAD_SUCCESS = Symbol(
  'POPULAR_MOVIES_LOAD_SUCCESS',
);
export const POPULAR_MOVIES_LOAD_FAIL = Symbol('POPULAR_MOVIES_LOAD_FAIL');

export const getPouparMovies = () => async (dispatch) => {
  try {
    dispatch({
      type: POPULAR_MOVIES_LOAD,
    });

    const response = await axios.get('/movie/popular', {
      params: {
        page: '1',
      },
    });
    dispatch({
      type: POPULAR_MOVIES_LOAD_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: POPULAR_MOVIES_LOAD_FAIL,
      error: error.message,
    });
  }
};
