import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
          addTodo({
            value,
            description,
          });
          setValue('');
          setDescription('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text"
     value={value} 
     onChange={(e) => setValue(e.target.value)}
      className="todo-input"
       placeholder='What is the task today?' />
    <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="todo-input"
        placeholder="Description"
      />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}