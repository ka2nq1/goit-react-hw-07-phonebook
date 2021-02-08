const initialState = "";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "@input/change":
      return action.payload;

    case "@input/reset":
      return "";

    default:
      return state;
  }
};