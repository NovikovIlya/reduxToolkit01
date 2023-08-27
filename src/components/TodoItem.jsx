

import { useDispatch } from "react-redux";

import { deleteTodo } from "../store/todoSlice";
import { toggleStatus } from "../store/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch()
  
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(deleteTodo(id))} style={{ color: 'red' }}>
        X
      </span>
    </div>
  );
};

export default TodoItem;
