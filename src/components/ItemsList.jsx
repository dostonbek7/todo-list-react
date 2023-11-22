function ItemsList({items, handleDelete, changeCopmleted}) {
  return (
    <ul className="mt-10">
      {items.map((item) => {
        const { id, text, completed } = item
        return (
          <li key={id} className="flex justify-between w-full mb-3">
            <div onClick={()=> changeCopmleted(id)} className="flex items-center gap-1">
              <input
                id={`default-checkbox ${id}`}
                defaultChecked={completed}
                type="checkbox"
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600  text-2xl'
              />
              <label
                htmlFor={`default-checkbox ${id}`}
                className={`${completed && 'line-through'} ms-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
              >
                {text}
              </label>
            </div>
            <button onClick={()=>handleDelete(item.id)}
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default ItemsList
