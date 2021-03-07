const scores = (state = "en-US", { type, payload }) => {
  switch (type) {
    case "CHANGE_LOCALE":
      return payload.locale;
    default:
      return state;
  }
};

export default scores;
