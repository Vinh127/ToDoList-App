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

export const deleteToDoListAction = (params) => {
// console.log("🚀 ~ file: todolist.actions.js ~ line 16 ~ deleteToDoListAction ~ params", params)
  return{
    type: 'DELETE_TODOLIST_REQUEST',
    payload:params,
  }
}

export const editToDoListAction = (params) => {
console.log("🚀 ~ file: todolist.actions.js ~ line 23 ~ editToDoListAction ~ params", params)
  return {
    type:'EDIT_TODOLIST_REQUEST',
    payload:params,
  }
}