import axios from '../../libs/axios';

export const MOVIE_LOAD = Symbol('MOVIE_LOAD');
export const MOVIE_LOAD_SUCCESS = Symbol('MOVIE_LOAD_SUCCESS');
export const MOVIE_LOAD_FAIL = Symbol('MOVIE_LOAD_FAIL');

export const getMoive = (id) => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_LOAD,
    });

    const response = await axios.get('/movie/' + id, {
      params: {
        append_to_response: 'credits',
      },
    });
    dispatch({
      type: MOVIE_LOAD_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: MOVIE_LOAD_FAIL,
      error: error.message,
    });
  }
};
