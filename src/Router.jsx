import React, { useState } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './utils/history';
import { ROUTERS } from './constants/router'


import ToDoListPage from './Todolist/index'

function BrowserRouter(props) {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={ROUTERS.toDoList}
          component={ToDoListPage}
        />
      </Switch>
    </Router>
  )
}

export default BrowserRouter;