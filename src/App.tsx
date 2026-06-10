import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser, editUserStatus, search } from './store/dataSlice'
import EditModal from './components/EditModal'

const App = () => {
  const {data}=useSelector((store)=>store.dataSlice)
  const dispatch=useDispatch()

  const [open,setOpen]=useState(false)
  const [user,setUser]=useState({})
  return (
    <div>
      <input defaultValue={''} type="text" onChange={(e)=>dispatch(search(e.target.value))}/>
      <form onSubmit={(e)=>(e.preventDefault(),dispatch(addUser({id:Date.now(),name:e.target.name.value, job:e.target.job.value})),e.target.reset())}>
        <input type="text" name='name' />
        <input type="text" name='job' />
        <button type='submit'>Add</button>
      </form>
      {data.map((el)=>{
        console.log(el);
        
        return(
          <div key={el.id}>
            <h1>{el.name}</h1>
            <h3>{el.job}</h3>
            <button onClick={()=>dispatch(deleteUser(el.id))}>Delete</button>
            <button onClick={()=>(setUser(el),setOpen(true))}>Edit</button>
            <input type="checkbox" checked={el.status}  onClick={()=>dispatch(editUserStatus(el.id))}/>
          </div>
        )
      })}

      <EditModal open={open} setOpen={setOpen} user={user}/>
    </div>
  )
}

export default App