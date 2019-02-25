import api from '../api';
import types from './types';

export const getCandidates = (token = '') => async dispatch => {
  dispatch({
    type: types.GET_CANDIDATES_REQUEST,
  });

  const listResponse = await api.get(`/list?token=${token}`);
  const candidateIds = listResponse.data.result;
  const nextToken = listResponse.data.token;

  for (const candidateId of candidateIds) {
    const detailsResponse = await api.get(`/detail/${candidateId}`);
    dispatch({
      type: types.ADD_CANDIDATE,
      payload: detailsResponse.data,
    });
  }

  if (token) {
    dispatch(getCandidates(nextToken));
  } else {
    dispatch({
      type: types.GET_CANDIDATES_SUCCESS,
    });
  }
};
