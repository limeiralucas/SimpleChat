const INITIAL_STATE = {
  messages: [{ id: 0, author: 'Lucas', text: 'Hello' }],
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_MESSAGE_RECEIVED': {
      if (action.payload.new) {
        return { ...state, messages: action.payload.messages };
      }
      const { messages } = state;
      return { ...state, messages: [...messages, ...action.payload.messages] };
    }
    default:
      return state;
  }
};

export default rootReducer;
