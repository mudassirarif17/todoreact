import React , {useEffect, useState} from 'react'

const GetTodo = ({todo , edit , deleteTodo , titleup , descup ,setTitleup , setDescup , save}) => {
    
// console.log(todo)


  return (
    <div className='container'>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Sno</th>
                <th>Title</th>
                <th>Descripton</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {todo == null ? "" :
                todo.map((data , index)=>(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{data.title}</td>
                <td>{data.desc}</td>
                <td className='d-flex gap-1'><button data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>edit(index)} className='btn-sm btn-primary'>Edit</button><button className='btn-sm btn-primary' onClick={()=>deleteTodo(index)}>Delete</button></td>
            </tr>
                ))
            }
        </tbody>
      </table>


{/* modal */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
          <input value={titleup} onChange={(e)=>setTitleup(e.target.value)} type="text" name="" id="" className='form-control' placeholder='Update Title'/>
        </div>
        <div>
          <textarea value={descup} onChange={(e)=>setDescup(e.target.value)} name="" id="" cols="30" rows="2" className='form-control my-2' placeholder='Update Description'></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={save} type="button" data-bs-dismiss="modal" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
    </div>

    
  )
}

export default GetTodo
