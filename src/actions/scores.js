const incrementScore = (id) => {
  console.log(id);
  return {
    type: "INCREMENT_SCORE",
    payload: { id },
  };
};

export { incrementScore };
