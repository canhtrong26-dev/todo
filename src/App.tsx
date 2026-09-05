import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import FilterBar from './components/FilterBar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          📝 Todo App
        </h1>
        <TodoInput />
        <FilterBar />
        <TodoList />
      </div>
    </div>
  )
}

export default App