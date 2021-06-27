import { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Input, Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import { ROUTERS } from '../constants/router';
import history from '../utils/history'
import Item from './Components/Item'

import {
  addToDoListAction,
  getToDoListAction,
  deleteToDoListAction
} from '../redux/actions'

function ToDoListPage(props) {

  const [productForm] = Form.useForm();

  const [searchKey, setSearchKey] = useState("");


  const {
    getToDoList,
    addToDoList,
    toDoList,
    deleteToDoList
  } = props;

  useEffect(() => {
    getToDoList();
  }, []);

  useEffect(() => {
    getToDoList({ searchKey: searchKey });
  }, [searchKey])

  const openNotificationUpdate = () => {
    notification.open({
      message: 'Thêm thành công!',
      icon: <SmileOutlined  style={{ color: 'Green' }} />,
    });
  };

  const deleteNotificationUpdate = () => {
    notification.open({
      message: 'Xóa thành công!',
      icon: <SmileOutlined  style={{ color: '#a8071a' }} />,
    });
  };


  function handleAddToDoList() {
    const values = productForm.getFieldsValue();
    addToDoList(values);

    openNotificationUpdate()

  }

  function handleDeleteToDoList(toDoListId) {

    deleteToDoList({
      id: parseInt(toDoListId),
    });

    deleteNotificationUpdate()

  }

  function renderToDoList() {
    return toDoList.data.map((toDoListItem, toDoListIndex) => {
      return (
        <Item
          toDoListItem={toDoListItem}
          toDoListId={toDoListItem.id}
          toDoListIndex={toDoListIndex}
          handleDeleteToDoList={handleDeleteToDoList}
        />
      )
    })
  }


  return (
    <Row gutter={24} style={{ maxWidth: 1000, width: '100%', margin: '16px auto 0' }}>
      <Col span={10}>
        <Card title="Add task" size="small">
          <Form
            form={productForm}
            layout="vertical"
            name="productForm"
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[
                {
                  required: true,
                  validator(_, value) {
                    if (!value) {
                      return Promise.reject('Không được để trống!');
                    }
                    else {
                      return Promise.resolve();
                    }
                  }
                }
              ]}
            >
              <Input placeholder="Title" />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  validator(_, value) {
                    if (!value) {
                      return Promise.reject('Không được để trống!');
                    }
                    else {
                      return Promise.resolve();
                    }
                  }
                }
              ]}
            >
              <Input placeholder="Description" />
            </Form.Item>
          </Form>

          {/* <Row >
            <Col> */}
          <Button type="primary" block onClick={() => handleAddToDoList()}>Add</Button>
          {/* </Col>
          </Row> */}
        </Card>
      </Col>

      <Col span={14}>
        <Input.Search
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Search..."
        />
        {renderToDoList()}
      </Col>
    </Row>
  );
}

const mapStateToProps = (state) => {
  const { toDoList } = state.toDoListReducer;
  return {
    toDoList: toDoList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

    addToDoList: (params) => dispatch(addToDoListAction(params)),

    getToDoList: (params) => dispatch(getToDoListAction(params)),

    deleteToDoList: (params) => dispatch(deleteToDoListAction(params)),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListPage);