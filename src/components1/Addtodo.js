import React , {useState} from 'react'

const Addtodo = ({todo , getTodo}) => {

    const [title , setTitle] = useState("");
    const [desc , setDesc] = useState("");
    
    
    const addTodo = () =>{
        if(title === "" || desc === ""){
            alert("Please Enter a valid title & Description")
        }
        else{
            todo.push({title : title , desc : desc})
            localStorage.setItem("todo" ,JSON.stringify(todo))
            getTodo()
            setTitle("");
            setDesc("");
        }
        
    }


  return (
    <div className='container my-5'>
      <div>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" placeholder='Title'/>
      </div>
      <div>
        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} name="" id="" cols="30" rows="3" className='form-control my-2' placeholder='Description'></textarea>
      </div>
      <div>
        <button onClick={addTodo} className='btn btn-primary'>Add Todo</button>
      </div>
    </div>
  )
}

export default Addtodo
