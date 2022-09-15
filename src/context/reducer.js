export const initialState = {
  modal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      // OPEN ODAL
      return {
        ...state,
        modal: {
          ...state.modal,
          action: true,
        },
      };
    case "CLOSE_MODAL":
      // CLOSE MODAL
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
}

export default reducer;
