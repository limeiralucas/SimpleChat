export const sendMessage = (text, author) => ({
  type: 'SEND_MESSAGE_REQUEST',
  payload: {
    id: (Math.random() * 100) % 100,
    text,
    author,
  },
});

export const getMessages = conversationId => ({
  type: 'GET_MESSAGE_REQUEST',
  payload: {
    conversationId,
  },
});

export default { sendMessage, getMessages };
