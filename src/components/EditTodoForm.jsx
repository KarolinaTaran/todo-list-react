import { useState } from "react";
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
          type="text"
          placeholder="Update the task!"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Update me</button>
      </form>
    </div>
  );
};

export default EditTodoForm;
