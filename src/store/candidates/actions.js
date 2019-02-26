import api from '../api';
import types from './types';

export const getCandidates = () => async dispatch => {
  dispatch({
    type: types.GET_CANDIDATES_REQUEST,
  });

  let token = '';
  do {
    const listResponse = await api.get(`/list?token=${token}`);
    const candidateIds = listResponse.data.result;
    token = listResponse.data.token;

    for (const candidateId of candidateIds) {
      const detailsResponse = await api.get(`/detail/${candidateId}`).catch(err => err);
      if (detailsResponse && detailsResponse.data) {
        dispatch({
          type: types.ADD_CANDIDATE,
          payload: detailsResponse.data,
        });
      }
    }
  } while (token)

  dispatch({
    type: types.GET_CANDIDATES_SUCCESS,
  });
};
