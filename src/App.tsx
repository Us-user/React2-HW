import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser } from './store/dataSlice'
import type { RootState } from './store/store'
import EditModal from './components/EditModal'

const App = () => {
  const { data } = useSelector((store: RootState) => store.dataSlice)
  const dispatch = useDispatch()
  const inp = useRef(null)

  const [openEdit,setOpenEdit]=useState(false)
  const [user,setUser]=useState({})
  return (
    <div>
      <input ref={inp} type="text" className='border-2 border-white rounded-sm' />
      <button onClick={() => (dispatch(addUser({ id: Date.now(), name: inp.current.value })), inp.current.value = '')}>Add User</button>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <h1>{el.name}</h1>
            <div className='flex gap-4 justify-center'>

              <button onClick={() => dispatch(deleteUser(el.id))}>Delete</button>
              <button onClick={()=>(setUser(el), setOpenEdit(true))}>Edit</button>
              
            </div>
          </div>
        )
      })}

      <EditModal openEdit={openEdit} setOpenEdit={setOpenEdit} user={user}/>
    </div>
  )
}

export default App