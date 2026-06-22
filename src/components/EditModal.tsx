import React from 'react'
import { useDispatch } from 'react-redux'
import { upData } from '../store/dataSlice'

const EditModal = ({open,setOpen,user}) => {
    const dispatch=useDispatch()
    const edit=(e)=>{
        e.preventDefault()
        let upUser={
            id:user.id,
            name: e.target.name.value,
            description: e.target.desc.value
        }
        dispatch(upData(upUser))
        setOpen(false)
    }
  return (
    <dialog open={open}>
        <form onSubmit={(e)=>edit(e)}>
            <input type="text" name='name' defaultValue={user.name} />
            <input type="text" name='desc' defaultValue={user.description} />
            <button type='submit'>Edit</button>
        </form>
    </dialog>
  )
}

export default EditModal