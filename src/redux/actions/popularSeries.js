import axios from '../../libs/axios';

export const POPULAR_SERIES_LOAD = Symbol('POPULAR_SERIES_LOAD');
export const POPULAR_SERIES_LOAD_SUCCESS = Symbol(
  'POPULAR_SERIES_LOAD_SUCCESS',
);
export const POPULAR_SERIES_LOAD_FAIL = Symbol('POPULAR_SERIES_LOAD_FAIL');

export const getPopularSeries = () => async (dispatch) => {
  try {
    dispatch({
      type: POPULAR_SERIES_LOAD,
    });

    const response = await axios.get('/tv/popular', {
      params: {
        page: '1',
      },
    });
    dispatch({
      type: POPULAR_SERIES_LOAD_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: POPULAR_SERIES_LOAD_FAIL,
      error: error.message,
    });
  }
};
