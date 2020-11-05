export default function updateAction(state, payload, del = false) {
  if (del === true) {
    return window.STATE_MACHINE_RESET();
  } else {
    return {
      ...state,
      form: {
        ...state.form,
        ...payload,
      },
    };
  }
}
