import { useDispatch } from 'react-redux'
import { dataZustand } from '../store/Zustand'
import { useAtom } from 'jotai'
import { addUserR } from '../store/dataSlice'
import { addUserAtom } from '../store/Jotai'

const AddModal = ({open,setOpen}) => {
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
            status: true
        }))

        addUserZ({
            id:id,
            email:e.target.email.value,
            address:e.target.address.value
        })

        addUserA({
            id:id,
            age:e.target.age.value,
            job:e.target.job.value
        })

        setOpen(false)


    }
  return (
    <dialog open={open} onClose={()=>setOpen(false)}>
        <form onSubmit={(e)=>addUser(e)}>
            <input type="text" name='name' placeholder='Name'/>
            <input type="text" name='surname' placeholder='Surname'/>
            <input type="text" name='email' placeholder='Email'/>
            <input type="text" name='age' placeholder='Age'/>
            <input type="text" name='job' placeholder='Job'/>
            <input type="text" name='address' placeholder='Address'/>
            <button type='button' onClick={()=>setOpen(false)}>Cansel</button>
            <button type='submit'>Add</button>
        </form>

    </dialog>
  )
}

export default AddModal