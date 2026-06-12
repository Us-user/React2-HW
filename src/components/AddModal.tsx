import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addUserR } from '../store/dataSlice'
import { dataZustand } from '../store/Zustand'
import { useAtom } from 'jotai'
import { addUserAtom } from '../store/Jotai'

const AddModal = ({openAdd,setOpenAdd}) => {
    const dispatch=useDispatch()
    const {addUserZ}=dataZustand()
    const [,addUserA]=useAtom(addUserAtom)
    const addUser=(e)=>{
        e.preventDefault()
        const id=Date.now()
        dispatch(addUserR({
            id:id,
            name:e.target.name.value,
            surname:e.target.surname.value,
            status:true
        }))
        addUserZ({
            id:id,
            email:e.target.email.value,
            address:e.target.email.value
        })
        addUserA({
            id:id,
            age:e.target.age.value,
            job:e.target.job.value
        })
        setOpenAdd(false)
    }
  return (
    <Dialog open={openAdd} onClose={()=>setOpenAdd(false)}>
        <DialogTitle>Add New User</DialogTitle>
        <form onSubmit={(e)=>addUser(e)}>
            <DialogContent sx={{
                display:'flex',
                flexDirection:'column',
                gap:3,
                width:'300px'
            }}>

                <input type="text" name='name' placeholder='Name' className='p-2 rounded-sm'/>
                <input type="text" name='surname' placeholder='Surname' className='p-2 rounded-sm'/>
                <input type="text" name='age' placeholder='Age' className='p-2 rounded-sm'/>
                <input type="text" name='job' placeholder='Job' className='p-2 rounded-sm'/>
                <input type="text" name='address' placeholder='Address' className='p-2 rounded-sm'/>
                <input type="text" name='email' placeholder='Email' className='p-2 rounded-sm'/>
            </DialogContent>
            <DialogActions>
                <Button variant='outlined' type='button' onClick={()=>setOpenAdd(false)}>Cansel</Button>
                <Button variant='contained' type='submit'>Add</Button>
            </DialogActions>
        </form>

    </Dialog>
  )
}

export default AddModal