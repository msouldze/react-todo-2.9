import './styles/App.css'
import NewTaskForm from './components/NewTaskForm.jsx'
import TaskProvider from './components/TaskProvider.jsx'
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
        <TaskProvider>
          <TaskList />
          <Footer />
        </TaskProvider>
      </section>
    </>
  )
}

export default App
