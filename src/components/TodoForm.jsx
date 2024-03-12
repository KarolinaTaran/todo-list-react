import { useState } from "react";
import css from "./TodoForm.module.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      addTodo(value);
      setValue("");
    } else {
      return alert("Please, add the task!");
    }
  };
  return (
    <div>
      <form className={css.formBox} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          placeholder="What is the task?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={css.addMeBtn} type="submit">
          Add me
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
