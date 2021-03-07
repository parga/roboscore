const scores = (state = {}, { type, payload }) => {
  switch (type) {
    case "INCREMENT_SCORE":
      state[payload.id] = {
        ...state[payload.id],
        initialValue: state[payload.id].initialValue + 1,
      };
      return { ...state };
    default:
      return state;
  }
};

export default scores;
