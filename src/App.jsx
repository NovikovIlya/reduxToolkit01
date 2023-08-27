import { useState,useEffect } from 'react';
import Todolist from './components/Todolist';
import InputField from './components/InputField';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { addNewTodo } from './store/todoSlice';
import { fetchTodos } from './store/todoSlice';

function App() {
  const [text, setText] = useState('');
  const {status,error} = useSelector((state)=>state.todos)
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addNewTodo(text));
  };

  useEffect(()=>{
    dispatch(fetchTodos())
  },[dispatch])

  return (
    <>
      <div>
        <InputField text={text} setText={setText} addTask={addTask} />

        {status === 'loading' && <div>Идет загрузка...</div>}
        {error && <div>Имеется ошибка: {error}</div>}
        <Todolist addTask={addTask} />
      </div>
    </>
  );
}

export default App;
