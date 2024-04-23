import { useState } from "react"

export function NewTodoForm (){
    const [newItem, setNewItem] = useState("")
    function handleSubmit(e){
        e.preventDefault() //prevent relaod and delete of content
        if (newItem === "") return

        AddTodo(newItem)

        setNewItem("") //clears out the textbox for the next item
      }

    return <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
        <input value={newItem}// takes the new value following the event listener fn below 
  onChange={e => setNewItem(e.target.value)}
type="text" id="item" />
<button className="btn">add</button>
</div>
</form>

}