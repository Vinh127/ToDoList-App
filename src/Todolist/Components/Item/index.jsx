import { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Input, Button, Space } from 'antd';
import { connect } from 'react-redux';

import { ROUTERS } from '../../../constants/router'
import history from '../../../utils/history'

import { editToDoListAction } from '../../../redux/actions'

function Item(props) {
  const {
    toDoListItem,
    toDoListId,
    toDoListIndex,
    handleDeleteToDoList,
    editToDoList
  } = props;


  const [isEdit, setIsEdit] = useState(false);
  const [isShowDescription, setIsShowDescription] = useState(true);
  const [editForm] = Form.useForm();

  function handleEditToDoList() {
    const values = editForm.getFieldsValue();
    editToDoList({
      ...values,
      id: toDoListId
    })

  }

  function renderItemView() {
    return (
      <Row>
        <Col span={8}>Title:</Col>
        <Col span={16}>{toDoListItem.title}</Col>
        {isShowDescription &&
          <>
            <Col span={8}>Description:</Col>
            <Col span={16}>{toDoListItem.description}</Col>
          </>
        }
      </Row>
    )
  }

  function renderItemEdit() {
    return (
      <Form
        form={editForm}
        layout="vertical"
        initialValues={{ title: toDoListItem.title, description: toDoListItem.description }}

      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input your title!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input your description!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    )
  }

  return (
    <Card size="small" style={{ marginTop: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        
        <Button
          type="primary"
          onClick={() => { history.push(`/toDoList/${toDoListItem.id}`) }}
        >
          Detail
        </Button>

        <Space>
          {isEdit
            ? (
              <>
                <Row justify="end" align="center">
                  <Space>
                    <Button
                      type="primary"
                      onClick={() => {
                        handleEditToDoList();
                        setIsEdit(false)
                      }}
                    >
                      Confirm
                    </Button>
                  </Space>

                  <Button onClick={() => setIsEdit(false)}>
                    Cancel
                  </Button>
                </Row>
              </>
            )
            : (
              <>
                <Button
                  type="primary"
                  ghost
                  onClick={() => setIsShowDescription(!isShowDescription)}
                >
                  {isShowDescription ? 'Show' : 'Hide'}
                </Button>
                <Button
                  type="primary"
                  ghost
                  onClick={() => setIsEdit(true)}
                >
                  Edit
                </Button>
                <Button danger onClick={() => handleDeleteToDoList(toDoListId, toDoListIndex)}>Delete</Button>
              </>
            )
          }
        </Space>
      </div>

      {isEdit ? renderItemEdit() : renderItemView()}
    </Card>
  );

}

const mapDispatchToProps = (dispatch) => {
  return {

    editToDoList: (params) => dispatch(editToDoListAction(params)),

  };
}

export default connect(null, mapDispatchToProps)(Item);