import React from "react";
import css from "./Todo.module.css";
import { FaRegPenToSquare } from "react-icons/fa6";

import { MdDeleteForever } from "react-icons/md";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className={css.wrapper}>
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? css.completed : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FaRegPenToSquare onClick={() => editTodo(task.id)} />
      </div>
      <div>
        <MdDeleteForever onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
