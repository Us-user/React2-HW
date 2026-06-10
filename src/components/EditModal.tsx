import { useDispatch } from 'react-redux'
import { editUser } from '../store/dataSlice'

const EditModal = ({open,setOpen,user}) => {
    const dispatch=useDispatch()
    const edit=(e)=>{
        e.preventDefault()
        dispatch(editUser({id:user.id,name:e.target.name.value,job:e.target.job.value}))
        setOpen(false)
        e.target.reset()
    }
  return (
    <dialog open={open} onClose={()=>setOpen(false)}>
        <form onSubmit={(e)=>edit(e)}>
            <input type="text" name='name' defaultValue={user.name}/>
            <input type="text" name='job' defaultValue={user.job}/>
            <button onClick={()=>setOpen(false)} type='button'>Cansel</button>
            <button type='submit'>Edit</button>
        </form>

    </dialog>
  )
}

export default EditModal