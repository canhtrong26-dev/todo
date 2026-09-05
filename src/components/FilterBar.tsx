import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import { setFilter } from '../store/todoSlice'

function FilterBar() {
  const filter = useSelector((state: RootState) => state.todos.filter)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="flex gap-2 mb-4">

      <button
        onClick={() => dispatch(setFilter('all'))}
        className={`px-4 py-1 rounded-full text-sm border
          ${filter === 'all'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'bg-white text-gray-500 border-gray-200'
          }`}
      >
        Tất cả
      </button>

      <button
        onClick={() => dispatch(setFilter('active'))}
        className={`px-4 py-1 rounded-full text-sm border
          ${filter === 'active'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'bg-white text-gray-500 border-gray-200'
          }`}
      >
        Đang làm
      </button>

      <button
        onClick={() => dispatch(setFilter('done'))}
        className={`px-4 py-1 rounded-full text-sm border
          ${filter === 'done'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'bg-white text-gray-500 border-gray-200'
          }`}
      >
        Xong
      </button>

    </div>
  )
}

export default FilterBar