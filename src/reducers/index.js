const INITIAL_STATE = {
  messages: [{ id: 0, author: 'Lucas', text: 'Hello' }],
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE_REQUEST': {
      const { messages } = state;
      return { ...state, messages: [...messages, action.payload] };
    }
    default:
      return state;
  }
};

export default rootReducer;
