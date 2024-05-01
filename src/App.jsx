import './styles/App.css'
import NewTaskForm from './components/NewTaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList />
        <Footer />
      </section>
    </>
  )
}

export default App
