import './style.css'
import {Todo} from '../module'
import SingleTodo from './SingleTodo'

interface Props{
 todos:Todo[],
 setTodos :React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC<Props> = ({todos,setTodos}:Props) => {
 return(
  <div className="todoList">
   {todos.map((todo)=>(
       // <li key={todo.id}>{todo.todo}</li>
     <SingleTodo 
     todos={todos} 
     setTodos={setTodos} 
     todo={todo} 
     key={todo.id} />
     ))}
  </div>
 )
}
export default TodoList;