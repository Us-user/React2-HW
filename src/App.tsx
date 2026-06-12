import { useAtom } from 'jotai'
import { useEffect, useMemo, useState } from 'react'
import { dataAtom, deleteItemAtom } from './store/Jotai'
import { dataZustand } from './store/Zustand'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserR, editStatus } from './store/dataSlice'
import AddModal from './components/AddModal'
import EditModal from './components/EditModal'

const App = () => {
  const [dataA] = useAtom(dataAtom)
  const { dataZ, deleteUserZ } = dataZustand()
  const { dataR } = useSelector((store:any) => store.dataSlice)

  const [, deleteA] = useAtom(deleteItemAtom)
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)

  const [openEdit, setOpenEdit] = useState(false)
  const [user, setUser] = useState({})

  let mainData = useMemo(() => {
    return dataR.map((el) => {
      let dataatom = dataA.find(e => e.id == el.id)
      let datazustand = dataZ.find(e => e.id == el.id)

      return {
        ...el,
        ...dataatom,
        ...datazustand
      }
    })
  }, [dataA, dataR, dataZ])

  const [searchData, setSearchData] = useState(mainData)

  useEffect(() => {
    setSearchData(mainData)
  }, [mainData])
  return (
    <>
      <div className='flex gap-12 items-center mb-4'>
        <input className='border border-white p-1 rounded-sm' placeholder='Search..' type="text" onChange={(e) => setSearchData(mainData.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase().trim())))} />
        <button onClick={() => setOpen(true)} className='rounded-2xl border border-white p-1 py-3'>Add User</button>
      </div>
      <div className='flex flex-wrap gap-10'>
        {searchData.map((el) => {
          return (
            <div key={el.id} className='border border-white rounded-2xl p-5 w-[330px]'>
              <div className='flex gap-3 justify-center'>
                <h2>{el.name}</h2>
                <h2>{el.surname}</h2>
              </div>
              <div className='flex justify-between'>
                <h3>Age:</h3>
                <h4>{el.age}</h4>
              </div>
              <div className='flex justify-between'>
                <h3>Job:</h3>
                <h4>{el.job}</h4>
              </div>
              <div className='flex justify-between '>
                <h3>Email:</h3>
                <h4>{el.email}</h4>
              </div>
              <div className='flex justify-between'>
                <h3>Address:</h3>
                <h4>{el.address}</h4>
              </div>
              <div className='flex justify-between'>
                <h3>Status:</h3>
                <h4>{el.status ? 'Active' : 'Inactive'}</h4>
              </div>
              <div className='flex justify-center gap-4'>
                <button onClick={() => {
                  dispatch(deleteUserR(el.id)),
                    deleteA(el.id),
                    deleteUserZ(el.id)
                }}>Delete</button>

                <button onClick={() => (setOpenEdit(true), setUser(el))}>Edit</button>

                <input type="checkbox" defaultChecked={el.status} onClick={() => dispatch(editStatus(el.id))} />
              </div>
            </div>
          )
        })}

        <AddModal open={open} setOpen={setOpen} />
        <EditModal openEdit={openEdit} setOpenEdit={setOpenEdit} user={user} />

      </div>
    </>
  )
}

export default App