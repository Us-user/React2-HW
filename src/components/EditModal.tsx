import { useDispatch } from 'react-redux'
import { editUser } from '../store/dataSlice'

const EditModal = ({openEdit,setOpenEdit,user}) => {
    const dispatch=useDispatch()

    const edit=(e)=>{
        e.preventDefault()
        dispatch(editUser({id:user.id,name:e.target.name.value}))
        setOpenEdit(false)
    }
  return (
    <dialog open={openEdit} onClose={()=>setOpenEdit(false)}>
        <form onSubmit={(e)=>edit(e)}>
            <input type="text" name='name' value={user.name}/>
            <button type='button' onClick={()=>setOpenEdit(false)}>Cansel</button>
            <button type='submit'>Edit</button>
        </form>

    </dialog>
  )
}

export default EditModal