import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Umar',
      age: 24
    }
  ])

  const validation = Yup.object({
    name: Yup.string()
      .max(18, "So more")
      .required('Required')
      .min(3, 'so malo'),
    age: Yup.number()
      .required('Required')
  })

  const [edit, setEdit] = useState(false)
  const { values, handleSubmit, handleChange, setValues, resetForm, errors, touched } = useFormik({
    initialValues: {
      name: '',
      age: '',
      id: ''
    },
    validationSchema: validation,
    onSubmit: value => {
      if (!edit) {
        setData(prev => [...prev, { ...value, id: Date.now() }])
        resetForm()
      }
      else {
        setData(prev => prev.map((el) => el.id == value.id ? value : el))
        setEdit(false)
        resetForm()
      }
    }
  })

  return (
    <>

      <form onSubmit={handleSubmit}>
        <input value={values.name} type="text" onChange={handleChange} name='name' />
        {errors.name && touched.name ? (
          <div>{errors.name}</div>
        ) : null}
        <input value={values.age} type="number" onChange={handleChange} name='age' />
        {errors.age && touched.age ? (
          <div>{errors.age}</div>
        ) : null}
        <button type='submit'>{edit ? "edit" : 'Add'}</button>
      </form>


      <div>
        {data.map((el) => {
          return (
            <div>
              <h1>{el.name}</h1>
              <h3>{el.age}</h3>
              <button onClick={() => { setEdit(true), setValues(el) }}>Edit</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App