import React from 'react'
import { useDispatch } from 'react-redux'
import { addUserR } from '../store/data.Slice'
import { Data } from '../Zustand'
import { useAtom } from 'jotai'
import { addUserAtom } from '../Atom'

const AddModal = ({open,setOpen}) => {
    const dispatch=useDispatch()
    const {addUserZ}=Data()
    const [,addUserA]=useAtom(addUserAtom)
    const addUser=(e)=>{
        const id=Date.now()
        e.preventDefault()
        dispatch(addUserR({id:id, name:e.target.name.value, surname: e.target.surname.value}))
        addUserZ({
            id: id,
            email: e.target.email.value,
            job: e.target.job.value
        })
        addUserA({
            id:id,
            phone:e.target.phone.value,
            adress: e.target.adress.value
        })

    }
  return (
    <dialog open={open} onClose={()=>setOpen(false)}>
        <form onSubmit={(e)=>addUser(e)}>
            <input type="text" name='name' placeholder='Name'/>
            <input type="text" name='surname' placeholder='Surname'/>
            <input type="text" name='email' placeholder='Email'/>
            <input type="text" name='phone' placeholder='Phone'/>
            <input type="text" name='adress' placeholder='Adress'/>
            <input type="text" name='job' placeholder='Job'/>
            <button type='button' onClick={()=>setOpen(false)}>Cansel</button>
            <button type='submit'>Add User</button>
        </form>
        
    </dialog>
  )
}

export default AddModal