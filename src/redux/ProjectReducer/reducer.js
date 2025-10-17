import { loading, error } from "../Action";

const initState = {
  loading: false,
  error: false,
  //   data: [],
};

export const projectReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case loading:
      return {
        ...state,
        loading: true,
      };

    case error:
      return {
        ...state,
        error: true,
        loading: false,
      };

    // case successful:
    //   return {
    //     ...state,
    //     successful: payload,
    //   };

    default:
      return state;
  }
};
