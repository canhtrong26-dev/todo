import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store'
import type { Todo } from '../types/todo'
import { toggleTodo, deleteTodo } from '../store/todoSlice'

type Props = {
  todo: Todo
}

function TodoItem({ todo }: Props) {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg mb-2">

      {/* Nút tick ✓ */}
      <button
        onClick={() => dispatch(toggleTodo(todo.id))}
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
          ${todo.completed
            ? 'bg-blue-500 border-blue-500 text-white'
            : 'border-gray-300'
          }`}
      >
        {todo.completed && '✓'}
      </button>

      {/* Chữ todo */}
      <span className={`flex-1 text-sm ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
        {todo.text}
      </span>

      {/* Nút xóa ✕ */}
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="text-gray-400 hover:text-red-500 text-lg"
      >
        ✕
      </button>

    </div>
  )
}

export default TodoItem