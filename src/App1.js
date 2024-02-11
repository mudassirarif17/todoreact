import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import GetTodo from './components/GetTodo';
import React , {useState , useEffect} from 'react';

function App() {
  let [todo , setTodo] = useState([]);
  let [titleup , setTitleup] = useState("");
  let [descup , setDescup] = useState("");
  let [saveIndex , setSaveIndex] = useState("");

  const getTodo = () =>{
    setTodo(JSON.parse(localStorage.getItem("todo")));
    if(todo == null){
      setTodo([]);
    }
  }

useEffect(()=>{
    getTodo();
},[])

const edit = (index) =>{
  setTodo(JSON.parse(localStorage.getItem("todo")));
  setTitleup(todo[index].title);
  setDescup(todo[index].desc)
  setSaveIndex(index);
}

const deleteTodo = (index) =>{
  setTodo(JSON.parse(localStorage.getItem("todo")));
  todo.splice(index , 1)
  localStorage.setItem("todo" ,JSON.stringify(todo));
  getTodo();
}

const save = ()=>{
  setTodo(JSON.parse(localStorage.getItem("todo")));
  todo[saveIndex].title = titleup;
  todo[saveIndex].desc = descup;
  localStorage.setItem("todo" ,JSON.stringify(todo));
  getTodo();
}

  return (
    <>
      <Addtodo todo={todo} getTodo={getTodo}/>
      <GetTodo todo={todo} edit={edit} deleteTodo={deleteTodo} titleup={titleup} descup={descup} setTitleup={setTitleup} setDescup={setDescup} saveIndex={saveIndex} save={save}/>
    </>
  );
}

export default App;
