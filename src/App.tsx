import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, getData } from './store/dataSlice'

const App = () => {
  const { data } = useSelector(store => store.dataSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])
  return (
    <div>
      {data.map((el)=>{
        return <div>
          <h1>{el.name}</h1>
          <button onClick={()=>dispatch(deleteData(el.id))}>Delete</button>
        </div>
      })}
    </div>
  )
}

export default App