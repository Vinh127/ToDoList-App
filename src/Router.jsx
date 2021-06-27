import React, { useState } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './utils/history';
import { ROUTERS } from './constants/router'


import ToDoListPage from './Todolist/index';
import ToDoListDetailPage from './TodolistDetail'

function BrowserRouter(props) {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={ROUTERS.TODOLIST}
          component={ToDoListPage}
        />

        <Route
          exact
          path={ROUTERS.TODOLIST_DETAIL}
          component={ToDoListDetailPage}
        />
      </Switch>
    </Router>
  )
}

export default BrowserRouter;