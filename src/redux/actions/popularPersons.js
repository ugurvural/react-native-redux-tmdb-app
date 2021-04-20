import axios from '../../libs/axios';

export const PERSONS_LOAD = Symbol('PERSON_LOAD');
export const PERSONS_LOAD_SUCCESS = Symbol('PERSON_LOAD_SUCCESS');
export const PERSONS_LOAD_FAIL = Symbol('PERSON_LOAD_FAIL');

export const getPopularPersons = () => async (dispatch) => {
  try {
    dispatch({
      type: PERSONS_LOAD,
    });

    const response = await axios.get('/person/popular', {
      params: {
        page: '1',
      },
    });
    dispatch({
      type: PERSONS_LOAD_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: PERSONS_LOAD_FAIL,
      error: error.message,
    });
  }
};
