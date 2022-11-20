import {Todo} from '../module';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './style.css'

type Props={
 todo:Todo,
 todos:Todo[],
 setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo,todos,setTodos}:Props)=>{

 const handelDone = (id:number) => {
  setTodos(todos.map((todo)=>
  todo.id === id? {...todo,isDone: !todo.isDone}:todo
  ))
 }

 return(
  <div className="singleTodo">
   <form className="singleTodo">
    <span className="singleTodoText">
     {todo.todo}
     <div> 
      <span className="icon">
       <AiFillEdit/>
      </span>
      <span className="icon">
      <AiFillDelete/>
      </span>
      <span className="icon" onClick={()=>handelDone(todo.id)}>
       <MdDone/>
      </span>
     </div>
    </span>
   </form>
  </div>
 )
}
export default SingleTodo;