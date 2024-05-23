import './styles/App.css'
import NewTaskForm from './components/NewTaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import Footer from './components/Footer.jsx'
import TaskProvider from './components/TaskProvider.jsx'
import FilterProvider from './components/FilterProvider.jsx'

function App() {
  return (
    <TaskProvider>
      <FilterProvider>
        <section className='todoapp'>
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm />
          </header>
          <section className="main">
            <TaskList />
            <Footer />
          </section>
        </section>
      </FilterProvider>
    </TaskProvider>
  )
}

export default App
