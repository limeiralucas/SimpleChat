import {
  put, takeEvery, call, delay, all,
} from 'redux-saga/effects';
import axios from 'axios';

export function* sendMessage(action) {
  yield put({
    type: 'GET_MESSAGE_RECEIVED',
    payload: {
      messages: [action.payload],
    },
  });

  yield delay(1000);

  yield put({
    type: 'MESSAGE_SENT',
  });
}

export function* fetchMessages(action) {
  let url = 'http://www.mocky.io/v2/5cbb672031000064194d7500';
  if (action.payload.conversationId === '1') {
    url = 'http://www.mocky.io/v2/5cbb7db431000035284d751d';
  }
  const response = yield call(axios.get, url);

  yield put({
    type: 'GET_MESSAGE_RECEIVED',
    payload: {
      new: true,
      messages: response.data,
    },
  });
}

export function* getMessageRequestWatcher() {
  yield takeEvery('GET_MESSAGE_REQUEST', fetchMessages);
}

export function* sendMessageRequestWatcher() {
  yield takeEvery('SEND_MESSAGE_REQUEST', sendMessage);
}

export default function* rootSaga() {
  yield all([getMessageRequestWatcher(), sendMessageRequestWatcher()]);
}
