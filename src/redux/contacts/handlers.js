export const handlePending = state => {
  return { ...state, isLoading: true };
};

export const handleRejected = (state, { payload }) => {
  return { ...state, error: payload, isLoading: false };
};
