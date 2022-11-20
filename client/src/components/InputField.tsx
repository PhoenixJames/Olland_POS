import './style.css'
import React, { useRef } from "react";
interface Props {
 todo: string;
 setTodo:React.Dispatch<React.SetStateAction<string>>
 handleAdd: (e:React.FormEvent)=> void;
}
const InputField = ({todo,setTodo,handleAdd}:Props) =>{
 const inputRef = useRef<HTMLInputElement>(null);
 return(
   <form className="input" onSubmit={(e)=>{
    handleAdd(e)
    inputRef.current?.blur()
    }}>
    <input
     ref={inputRef}
     value={todo}
     onChange={(e)=>setTodo(e.target.value)} 
     type="input" placeholder="enter a task"  
     className="inputBox" />
    <button className="inputSubmit" type="submit" >Go</button>
   </form>
   

 )
}
export default InputField; 