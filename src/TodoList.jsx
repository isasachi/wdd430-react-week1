import TodoItem from "./TodoItem"

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return  <ul className='list'>
    {todos.length === 0 && 'No todos'}
    {
      todos.map(todo => {
        return (
          <TodoItem 
            {...todo}
            key={todo.key}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })
    }
    
  </ul>
}

export default TodoList