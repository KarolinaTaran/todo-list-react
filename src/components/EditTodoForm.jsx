import { useState } from "react";
import css from "./EditTodoForm.module.css";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          placeholder="Update the task!"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={css.updateBtn} type="submit">
          Update me
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;
