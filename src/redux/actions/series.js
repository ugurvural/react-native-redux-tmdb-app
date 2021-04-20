import axios from '../../libs/axios';

export const SERIES_LOAD = Symbol('SERIES_LOAD');
export const SERIES_LOAD_SUCCESS = Symbol('SERIES_LOAD_SUCCESS');
export const SERIES_LOAD_FAIL = Symbol('SERIES_LOAD_FAIL');

export const getSeries = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SERIES_LOAD,
    });
    const response = await axios.get('/tv/' + id, {
      params: {
        append_to_response: 'credits',
      },
    });
    dispatch({
      type: SERIES_LOAD_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SERIES_LOAD_FAIL,
      error: error.message,
    });
  }
};
