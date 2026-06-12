import React, { use, useActionState } from 'react'
import { useDispatch } from 'react-redux'
import { editUserR } from '../store/dataSlice'
import { useAtom } from 'jotai'
import { editUserAtom } from '../store/Jotai'
import { dataZustand } from '../store/Zustand'

const EditModal = ({openEdit,setOpenEdit,user}) => {

    const dispatch=useDispatch()
    const {editUserZ}=dataZustand()
    const [,editUserA]=useAtom(editUserAtom)
    const editUser=(e)=>{
        e.preventDefault()

        dispatch(editUserR({
            id:user.id,
            name:e.target.name.value,
            surname:e.target.surname.value
        }))

        editUserZ({
            id:user.id,
            email:e.target.email.value,
            address:e.target.address.value
        })

        editUserA({
            id:user.id,
            age:e.target.age.value,
            job:e.target.job.value
        })
        setOpenEdit(false)


    }
  return (
    <dialog open={openEdit} onClose={setOpenEdit}>
        <form onSubmit={(e)=>editUser(e)}>
            <input defaultValue={user.name} type="text" name='name' placeholder='Name'/>
            <input defaultValue={user.surname} type="text" name='surname' placeholder='Surname'/>
            <input defaultValue={user.email} type="text" name='email' placeholder='Email'/>
            <input defaultValue={user.age} type="text" name='age' placeholder='Age'/>
            <input defaultValue={user.job} type="text" name='job' placeholder='Job'/>
            <input defaultValue={user.address} type="text" name='address' placeholder='Address'/>
            <button type='button' onClick={()=>setOpenEdit(false)}>Cansel</button>
            <button type='submit'>Edit</button>
        </form>

    </dialog>
  )
}

export default EditModal