import types from './types';

export const initialState = {
  all: [],
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_CANDIDATES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_CANDIDATES_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_CANDIDATE:
      return {
        ...state,
        all: [
          ...state.all,
          payload,
        ],
      };
    default:
      return state;
  }
};
