export default function updateAction(state, payload) {
  return {
    ...state,
    form: {
      ...state.form,
      ...payload,
    },
  };
}
