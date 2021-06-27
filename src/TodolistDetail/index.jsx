import { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd';
import { connect } from 'react-redux';

import { ROUTERS } from '../constants/router';
import history from '../utils/history'

import { getToDoListDetailAction } from '../redux/actions';

function ToDoListDetailPage({
  getToDoListDetail,
  match,
  toDoListDetail
}) {

  const todolistId = match.params.id;
  console.log("🚀 ~ file: index.jsx ~ line 17 ~ todolistId", todolistId)
  useEffect(() => {
    getToDoListDetail({ id: todolistId })
  }, [todolistId])

  return (
    <div style={{ width: "500px", margin: "auto"}}>
      <Card size="small" style={{border: "1px solid #333"}}>
        <div style={{display:"flex", justifyContent:"flex-end",borderBottom:"1px solid #333", width:"100%", padding:"8px 0px"}}>
          <Button type="primary" onClick={() => history.push(ROUTERS.TODOLIST)} >
            Quay Lai
          </Button>
        </div>
        <Row style={{ marginTop: "10px" }}>
          <Col span={8}>Title:</Col>
          <Col span={16}>{toDoListDetail.data.title}</Col>
          <Col span={8}>Description:</Col>
          <Col span={16}>{toDoListDetail.data.description}</Col>
        </Row>
      </Card>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { toDoListDetail } = state.toDoListReducer;
  return {
    toDoListDetail: toDoListDetail,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getToDoListDetail: (params) => dispatch(getToDoListDetailAction(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListDetailPage);