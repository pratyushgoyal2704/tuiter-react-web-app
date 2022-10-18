import TodoItem from "./Todoitem.js";
import todos from "./todos.js"
const TodoList = () => {
    return(`
       <ul>
             ${
        todos.map(todo => {
            return(TodoItem(todo));
        }).join('')
    }

       </ul>
   `);
}
export default TodoList;