export const inputHandler = (e) => ({
  type: "@input/change",
  payload: e.target.value,
});

export const inputReset = () => ({
  type: "@input/reset",
});