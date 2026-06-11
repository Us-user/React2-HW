import { useAtom } from 'jotai'
import React from 'react'
import { useDispatch } from 'react-redux'
import { editUserAtom } from '../Atom'
import { Data } from '../Zustand'
import { editUserR } from '../store/data.Slice'

const EditModal = ({user, openEdit, setOpenEdit}) => {
  const dispatch=useDispatch()
  const [,editA]=useAtom(editUserAtom)
  const {editUserZ}=Data()
  const editUser=(e)=>{
    e.preventDefault()
    dispatch(editUserR({
      id:user.id,
      name:e.target.name.value,
      surname:e.target.surname.value,
      status:user.status
    }))

    editUserZ({
      id:user.id,
      email: e.target.email.value,
      job: e.target.job.value
    })

    editA({
      id:user.id,
      phone: e.target.phone.value,
      adress: e.target.adress.value
    })

    setOpenEdit(false)
  }
  return (
    <dialog open={openEdit} onClose={()=>setOpenEdit(false)}>
        <form onSubmit={(e)=>editUser(e)}>
            <input type="text" name='name' defaultValue={user.name}/>
            <input type="text" name='surname' defaultValue={user.surname}/>
            <input type="text" name='phone' defaultValue={user.phone}/>
            <input type="text" name='email' defaultValue={user.email}/>
            <input type="text" name='adress' defaultValue={user.adress}/>
            <input type="text" name='job' defaultValue={user.job}/>
            <button type='button' onClick={()=>setOpenEdit(false)}>Cancel</button>
            <button type='submit'>Edit</button>
        </form>
    </dialog>
  )
}

export default EditModal