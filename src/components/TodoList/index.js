import React from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { newTodo } from "../../redux/selector";
import { todoListSlice } from "./todoSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(newTodo);

  const [todoName, setTodoName] = useState("");
  const [todoPriority, setTodoPriority] = useState("Medium");

  const handleAddTodo = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: todoPriority,
      })
    );

    setTodoName("");
    setTodoPriority("Medium");
  };

  const handleChangeName = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriority = (value) => {
    setTodoPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleChangeName} />
          <Select
            defaultValue='Medium'
            value={todoPriority}
            onChange={handlePriority}
          >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
