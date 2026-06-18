import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

const App = () => {
  const [data,setData]=useState([])
  const {
    register,
    watch,
    handleSubmit,
    formState: {errors}
  } = useForm()
  const onSubmit = (value)=>{
    setData((prev)=>[...prev,value])
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name')} />
        <input type="text" {...register('email', {required:true})} />
        {errors.email && <p>Error</p>}
        <input type="submit" />
      </form>


      <div>
        {data.map((el)=>{
          return <div>
            <h1>{el.name}</h1>
          </div>
        })}
      </div>

    </div>
  )
}

export default App