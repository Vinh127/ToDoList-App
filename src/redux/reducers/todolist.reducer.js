const initialState = {
  toDoList: {
    data: [],
    load: false,
    error: '',
  },
  toDoListDetail: {
    data:[],
    load:false,
    error:'',
  }
}

export default function toDoListReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODOLIST_REQUESTT': {
      return {
        ...state,
        toDoList: {
          ...state.toDoList,
          load: true,
        },
      }
    }

    case 'ADD_TODOLIST_SUCCESS': {
      const { data } = action.payload;
      return {
        ...state,
        toDoList: {
          ...state.toDoList,
          data: [
            ...state.toDoList.data,
            data
          ],
          load: false,
        },
      }
    }

    case 'ADD_TODOLIST_FAIL': {
      const { error } = action.payload;
      return {
        ...state,
        toDoList: {
          ...state.toDoList,
          load: false,
          error: error,
        }
      }
    }

    // Get ToDoList
    case 'GET_TODOLIST_REQUEST': {
      return {
        ...state,
        toDoList: {
          ...state.toDoList,
          load: true,
        },
      }
    }
    case 'GET_TODOLIST_SUCCESS': {
      const { data } = action.payload;
      return {
        ...state,
        toDoList: {
          ...state.toDoList,
          data: data,
          load: false,
        },
      }
    }
    case 'GET_TODOLIST_FAIL': {
      const { error } = action.payload;
      return {
        ...state,
        toDoList: {
          ...state.toDoList,
          load: false,
          error: error,
        },
      }
    }

    // Get ToDoList detail

    case 'GET_TODOLIST_DETAIL_REQUEST': {
      return {
        ...state,
        toDoListDetail: {
          ...state.toDoListDetail,
          load: true,
        },
      }
    }
    case 'GET_TODOLIST_DETAIL_SUCCESS': {
      const { data } = action.payload;
      console.log("🚀 ~ file: todolist.reducer.js ~ line 99 ~ toDoListReducer ~ data", data)
      return {
        ...state,
        toDoListDetail: {
          ...state.toDoListDetail,
          data: data,
          load: false,
        },
      }
    }
    case 'GET_TODOLIST_DETAIL_FAIL': {
      const { error } = action.payload;
      return {
        ...state,
        toDoListDetail: {
          ...state.toDoListDetail,
          load: false,
          error: error,
        },
      }
    }



    // Delete ToDoList
    case 'DELETE_TODOLIST_REQUEST': {
      return {
        ...state,
        toDoList: {
          ...state.toDoList,
          load: true,
        },
      }
    }


    case 'DELETE_TODOLIST_SUCCESS': {
      const {id} = action.payload;
      console.log("🚀 ~ file: todolist.reducer.js ~ line 95 ~ toDoListReducer ~ id", id)
      const newToDoList = state.toDoList.data;
      const toDoListIndex = newToDoList.findIndex((item) => item.id === id);
      newToDoList.splice(toDoListIndex, 1);
      return {
        ...state,
        toDoList: {
          ...state.toDoList,
          data: newToDoList,
          load: false
        }
      }
    }

    case 'DELETE_TODOLIST_FAIL': {
      const { error } = action.payload;
      return {
        ...state,
        toDoList: {
          ...state.toDoList,
          load: false,
          error: error,
        },
      };
    }

    // Edit ToDoList
    case 'EDIT_TODOLIST_REQUEST': {
      return {
        ...state,
        toDoList: {
          ...state.toDoList,
          load: true,
        },
      }
    }

    case 'EDIT_TODOLIST_SUCCESS': {
      const { data } = action.payload;
      console.log("🚀 ~ file: todolist.reducer.js ~ line 134 ~ toDoListReducer ~ data", data)
      const anotherToDoList = state.toDoList.data
      const anotherToDoListIndex = anotherToDoList.findIndex((item) => item.id === data.id);
      anotherToDoList.slice(anotherToDoListIndex, 1, data);
      return {
        ...state,
        toDoList: {
          ...state.toDoList,
          data: anotherToDoList,
          load: true,
        },
      };
    }

    case 'EDIT_TODOLIST_FAILL': {
      const { error } = action.payload;
      return {
        ...state,
        toDoList: {
          ...state.toDoList,
          load: false,
          error: error,
        },
      };
    }



    default: {
      return state;
    }
  }
}
