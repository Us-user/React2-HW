import React, { use, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, getData } from './store/dataSlice'
import EditModal from './components/EditModal'

const App = () => {
  const { data } = useSelector(store => store.dataSlice)
  const dispatch = useDispatch()

  const [open,setOpen]=useState(false)
  const [user,setUser]=useState({})

  useEffect(() => {
    dispatch(getData())
  }, [])

  const buildUser = (e) => {
    e.preventDefault()
    let data = new FormData()
    data.append('Name', e.target.name.value)
    data.append('Description', e.target.desc.value)
    for (let i = 0; i < e.target.images.files.length; i++) {
      data.append('Images', e.target.images.files[i])
    }
    dispatch(addData(data))
  }

  return (
    <>
      <form onSubmit={(e) => buildUser(e)}>
        <input type="text" name='name' className=' border rounded-2xl p-1 px-3' placeholder='name' />
        <input type="text" name='desc' className=' border rounded-2xl p-1 px-3' placeholder='description' />
        <input type="file" multiple name='images' />
        <button type='submit' className='rounded-2xl p-2 px-5 bg-green-500 text-white'>Add User</button>
      </form>
      <div className='flex gap-4 flex-wrap'>
        {data.map((el) => {
          console.log(el.images[0]?.imageName);

          return <div className='rounded-2xl p-3 border'>
            <img src={`https://to-dos-api.softclub.tj/images/${el.images[0].imageName}`} alt="" className='w-30 h-30'/>
            <h1>{el.name}</h1>
            <p>{el.description}</p>
            <button className='bg-red-600 rounded-3xl p-1 px-6 text-white' onClick={() => dispatch(deleteData(el.id))}>Delete</button>
            <button onClick={()=>(setOpen(true), setUser(el))} className='bg-green-600 rounded-3xl p-1 px-6 text-white'>Edit</button>
          </div>
        })}
      </div>

      <EditModal open={open} setOpen={setOpen} user={user}/>
    </>
  )
}

export default App