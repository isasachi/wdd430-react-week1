import { useState } from "react"

function NewTodoForm({ addTodo }) {

    const [newItem, setNewItem] = useState('')

    function updateTodoInput(event) {
        setNewItem(event.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === '') return

        addTodo(newItem)

        setNewItem('')
    }

    return <form className='new-item-form' onSubmit={handleSubmit}>
    <div className='form-row'>
        <label htmlFor="item">New Item</label>
        <input 
        type="text"
        name="item" 
        id="item" 
        value={newItem} 
        onChange={e => updateTodoInput(e)} 
        />
    </div>
    <button className='btn'>Add</button>
    </form>
}

export default NewTodoForm