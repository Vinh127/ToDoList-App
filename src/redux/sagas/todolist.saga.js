import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import history from '../../utils/history';
// import { ROUTERS } from '../../constants/router';


import { message } from 'antd';

function* addToDoListSaga(action) {
  try {
    const { title, description } = action.payload
    const result = yield axios({
      method: 'POST',
      url: 'http://localhost:3001/toDoList',
      data: {
        title: title,
        description: description
      }
    });
    yield put({
      type: 'ADD_TODOLIST_SUCCESS',
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: 'ADD_TODOLIST_FAIL',
      payload: {
        error: e.error
      },
    });
  }
}

function* getToDoListSaga(action) {
  try {
    const { productId } = action.payload
    const result = yield axios({
      method: 'GET',
      url: `http://localhost:3001/toDoList`,
      // params: {
      //   productId: productId,
      //   _sort: "id",
      //   _order: "desc"
      // }
    });
    yield put({
      type: 'GET_TODOLIST_SUCCESS',
      payload: {
        data: result.data
      },
    });
  } catch (e) {
    yield put({
      type: 'GET_TODOLIST_FAIL',
      payload: {
        error: e.error
      },
    });
  }
}

// Delete ToDoList
function* deleteToDoListSaga(action) {
  try {
    const {id } = action.payload;
    console.log("🚀 ~ file: todolist.saga.js ~ line 68 ~ function*deleteToDoListSaga ~ action.payload", action.payload)
    const result = yield axios({
      method: 'DELETE',
      url: `http://localhost:3001/toDoList/${id}`,
    });
    // yield put({ type: 'GET_TODOLIST_REQUEST' });

    yield put({
      type: 'DELETE_TODOLIST_SUCCESS',
      payload: {
        id:id
      }
    });
  } catch (e) {
    yield put({
      type: 'DELETE_TODOLIST_FAIL',
      payload: {
        error: e.error
      },
    });
  }
}


function* editToDoListSaga(action) {
  try {
    const { id,title, description} = action.payload;
    const editResult = yield axios({
      method: 'PATCH',
      url: `http://localhost:3001/toDoList/${id}`,
      data: {
        title:title,
        description:description
      }
    });
    console.log("🚀 ~ file: todolist.saga.js ~ line 103 ~ function*editToDoListSaga ~ editResult", editResult)
    yield put({ type: 'GET_TODOLIST_REQUEST'});
    yield put({
      type: 'EDIT_TODOLIST_SUCCESS',
      payload: {
        data: editResult.data,
        id:id
      },
    });
  } catch (e) {
    yield put({
      type: 'EDIT_TODOLIST_FAIL',
      payload: {
        error: e.error
      },
    });
  }
}



export default function* toDoListSaga() {
  yield takeEvery("ADD_TODOLIST_REQUEST", addToDoListSaga);

  yield takeEvery("GET_TODOLIST_REQUEST", getToDoListSaga);

  yield takeEvery('DELETE_TODOLIST_REQUEST', deleteToDoListSaga);

  yield takeEvery('EDIT_TODOLIST_REQUEST',editToDoListSaga)
}