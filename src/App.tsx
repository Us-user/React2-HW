import { useAtom } from 'jotai'
import React from 'react'
import { deleteDataItem, getLoadableAtom } from './store/jotai'

const App = () => {
  const [value]=useAtom(getLoadableAtom)
  const [,deleteA]=useAtom(deleteDataItem)

  if(value.state=='loading'){
    return(
      <div>
        <h1>Loading..</h1>
      </div>
    )
  }
  return (
    <div>
      {value?.data.map((el)=>{
        return(
          <div>
            <h1>{el.name}</h1>
            <button onClick={()=>deleteA(el.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default App