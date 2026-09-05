import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import TodoItem from './TodoItem'

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const filter = useSelector((state: RootState) => state.todos.filter)

   const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'done') return todo.completed
    return true  // filter === 'all' → hiện tất cả
  })

   if (filteredTodos.length === 0) {
    return (
      <p className="text-center text-gray-400 py-6">
        Không có todo nào! 😊
      </p>
    )
  }

   return (
    <div>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList

