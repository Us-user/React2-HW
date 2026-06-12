import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { editUserR } from '../store/dataSlice'
import { useAtom } from 'jotai'
import { editUserAtom } from '../store/Jotai'
import { dataZustand } from '../store/Zustand'

const EditModal = ({openEdit,setOpenEdit,user}) => {
    const dispatch=useDispatch()
    const [,editUserA]=useAtom(editUserAtom)
    const {editUserZ}=dataZustand()
    const editUser=(e)=>{
        e.preventDefault()
        dispatch(editUserR({
            id:user.id,
            name:e.target.name.value,
            surname:e.target.surname.value
        }))
        editUserA({
            id:user.id,
            age:e.target.age.value,
            job:e.target.job.value
        })
        editUserZ({
            id:user.id,
            email:e.target.email.value,
            address:e.target.address.value
        })
        setOpenEdit(false)
    }
  return (
    <Dialog open={openEdit} onClose={()=>setOpenEdit(false)}>
        <DialogTitle>Edit User</DialogTitle>
        <form onSubmit={(e)=>editUser(e)}>
            <DialogContent sx={{
                display:'flex',
                flexDirection:'column',
                gap:3,
                width:'300px'
            }}>
                <input type="text" defaultValue={user.name} name='name' placeholder='Name' className='p-2 rounded-sm'/>
                <input type="text" defaultValue={user.surname} name='surname' placeholder='Surname' className='p-2 rounded-sm'/>
                <input type="text" defaultValue={user.age} name='age' placeholder='Age' className='p-2 rounded-sm'/>
                <input type="text" defaultValue={user.job} name='job' placeholder='Job' className='p-2 rounded-sm'/>
                <input type="text" defaultValue={user.address} name='address' placeholder='Address' className='p-2 rounded-sm'/>
                <input type="text" defaultValue={user.email} name='email' placeholder='Email' className='p-2 rounded-sm'/>
            </DialogContent>
            <DialogActions>
                <Button type='button' onClick={()=>setOpenEdit(false)}>Cansel</Button>
                <Button type='submit'>Edit</Button>
            </DialogActions>
        </form>

    </Dialog>
  )
}

export default EditModal