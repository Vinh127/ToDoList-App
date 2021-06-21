import { fork } from 'redux-saga/effects';

import toDoListSaga from './todolist.saga';


export default function* mySaga() {
  yield fork(toDoListSaga);

}
