import './styles/App.css'
import { useEffect, useState } from 'react'
import NewTaskForm from './components/NewTaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [error, setError] = useState();
  const [todos, setTodos] = useState(null);

  const getTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await response.json();
      setTodos([...todos.slice(0, 9)]);
    } catch(e) {
      setError(e);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  function addTodo(event) {
    const todo = {
      id: todos.length + 1,
      title: event.target.value,
      completed: false
    }

    if(event.key === 'Enter') {
      setTodos([...todos, todo]);
      event.target.value = '';
    }
  }

  return (
    <section className='todoapp'>
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTodo={addTodo}/>
      </header>
      <section className="main">
        {todos && <TaskList todos={todos}/>}
        <Footer todos={todos} />
      </section>
    </section>
  )
}

export default App
