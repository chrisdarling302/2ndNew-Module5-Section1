import './Todo.css';

function Todo({title, onTodoDelete}) {
 function deleteTodo(title) {
  console.log("deleteTodo", title.toUpperCase())
 }
  

    return  <div className="todo">
      <p>{title}</p>
      <button onClick={onTodoDelete}>Delete</button>
     </div>
}

export default Todo