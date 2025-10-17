import { loading, error } from "../Action";

export const loadingActin = () => {
  return { type: loading };
};

export const errorAction = () => {
  return { type: error };
};

// export const successfulAction = () => {
//   return { type: successful };
// };
