import TodoItem from './TodoItem';
import {  useSelector } from 'react-redux/es/hooks/useSelector';

const Todolist = () => {
  const todos = useSelector(state=>state.todos.todos)
  console.log(todos)
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        
          // toggleTodoComplete={toggleTodoComplete}
          // removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default Todolist;
