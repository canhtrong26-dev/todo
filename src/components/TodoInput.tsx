import { useState } from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store'
import { addTodo } from '../store/todoSlice'

function TodoInput() {
  const [text, setText] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const handleAdd = () => {
    if (!text.trim()) return
    dispatch(addTodo(text))
    setText('')
  }
return (
  <div className="flex gap-2 mb-6">
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      placeholder="Nhập việc cần làm..."
      className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none"
    />
    <button
      onClick={handleAdd}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90"
    >
      Thêm
    </button>
  </div>
)   
}

export default TodoInput