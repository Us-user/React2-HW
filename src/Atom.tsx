import { useAtom } from 'jotai'
import React from 'react'
import { dataAtom, deleteItemDataAtom } from './store/atom'

const Atom = () => {
    const [data]=useAtom(dataAtom)
    const [,deleteItem]=useAtom(deleteItemDataAtom)
  return (
    <div>
        {data.map((el)=>{
            return(
                <div key={el.id}>
                    <h1>{el.name}</h1>
                    <button onClick={()=>deleteItem(el.id)}>delete</button>
                </div>
            )
        })}

    </div>
  )
}

export default Atom