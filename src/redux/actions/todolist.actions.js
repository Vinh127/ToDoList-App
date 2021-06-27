export const addToDoListAction = (params) => {
  return {
    type:"ADD_TODOLIST_REQUEST",
    payload:params
  }
}
export const getToDoListAction = (params) => {
  return {
    type:"GET_TODOLIST_REQUEST",
    payload:params
  }
}

export const getToDoListDetailAction = (params) => {
console.log("🚀 ~ file: todolist.actions.js ~ line 15 ~ getToDoListDetailAction ~ params", params)
  return{
    type: 'GET_TODOLIST_DETAIL_REQUEST',
    payload:params,
  }
}

export const deleteToDoListAction = (params) => {
  return{
    type: 'DELETE_TODOLIST_REQUEST',
    payload:params,
  }
}

export const editToDoListAction = (params) => {
  return {
    type:'EDIT_TODOLIST_REQUEST',
    payload:params,
  }
}