import { createSlice } from '@reduxjs/toolkit'
import type { Todo } from '../types/todo'

// ← THÊM MỚI: hàm lưu vào localStorage
const saveToStorage = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// ← THÊM MỚI: hàm đọc từ localStorage
const loadFromStorage = (): Todo[] => {
  try {
    const data = localStorage.getItem('todos')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

type TodoState = {
  todos: Todo[]
  filter: 'all' | 'active' | 'done'
}

const initialState: TodoState = {
  todos: loadFromStorage(),  // ← SỬA: đọc từ localStorage
  filter: 'all'
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    addTodo: (state, action) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      }
      state.todos.push(newTodo)
      saveToStorage(state.todos)  // ← THÊM MỚI: lưu sau khi thêm
    },

    toggleTodo: (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
        saveToStorage(state.todos)  // ← THÊM MỚI: lưu sau khi toggle
      }
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload)
      saveToStorage(state.todos)  // ← THÊM MỚI: lưu sau khi xóa
    },

    setFilter: (state, action) => {
      state.filter = action.payload
    }

  }
})

export const { addTodo, toggleTodo, deleteTodo, setFilter } = todoSlice.actions
export default todoSlice.reducer