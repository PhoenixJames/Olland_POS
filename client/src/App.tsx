import React from 'react';
import './App.css';
import { useState } from 'react';
import {Todo} from "./module"
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { AllSelect } from './components/TestingSelect/index';

const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleAdd = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo("");
    }
  }
  return (
    <div className="App">
     <span className="task">Task</span>
     <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     <TodoList todos={todos} setTodos={setTodos} />
     <AllSelect />
    </div>
  );
}

export default App;

// let name:any;
// let age:number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];
// let printName:(name:string) => never;
// type Person ={
//   name: string;
//   age?: number;
// };
// interface Person{
//   name: string;
//   age?:number;
// }
// interface Guy extends Person{
//   profession : string;
// }
// type X = {
//   a: string;
//   b:number;
// }
// type Y = X &{
//   c:string;
//   d:number;
// }
// let y : Y = {
//   c: "kyawGyi",
//   d:21
// }
// let person: Person ={
//   name: "aungkyaw",
//   age:28
// }
