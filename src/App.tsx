import { useAtom } from 'jotai'
import { dataAtom, deleteUserAtom } from './Atom'
import { useDispatch, useSelector } from 'react-redux'
import { Data } from './Zustand'
import { useEffect, useMemo, useState } from 'react'
import { deleteUser, editStatusUser } from './store/data.Slice'
import AddModal from './components/AddModal'
import EditModal from './components/EditModal'
import InfoModal from './components/InfoModal'

const App = () => {
  const [dataA, setDataA] = useAtom(dataAtom)
  const { dataR } = useSelector((store) => store.dataSlice)
  const { dataZ, deleteUserZ } = Data()
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [user, setUser] = useState({})
  const [openEdit, setOpenEdit] = useState(false)

  const [openInfo,setOpenInfo]=useState(false)
  const [infoUser,setInfoUser]=useState({})


  const mainData = useMemo(() => {
    return dataR.map((el) => {
      const datazustand = dataZ.find((x) => el.id === x.id);
      const dataatom = dataA.find((x) => el.id === x.id);
      return {
        ...el,
        ...datazustand,
        ...dataatom,
      };
    });
  }, [dataZ, dataR, dataA]);

  const [dataSearch, setDateSearch] = useState(mainData)

  useEffect(()=>{
    setDateSearch(mainData)
  },[mainData])

  return (
    <>
      <input type="text" onChange={(e) => setDateSearch(mainData.filter((el) => el.name.toLowerCase().includes(e.target.value.toLowerCase().trim())))} />
      <button onClick={() => setOpen(true)}>Add User</button>
      <div className='flex gap-4 flex-wrap'>
        {dataSearch && dataSearch.map((el) => {
          return (
            <div key={el.id} className='border rounded-2xl p-4'>
              <div className='flex gap-2'>
                <h2>{el.name}</h2>
                <h2>{el.surname}</h2>
              </div>
              <h3>{el.email}</h3>
              <h3>{el.job}</h3>
              <h3>{el.phone}</h3>
              <h3>{el.adress}</h3>
              <input type="checkbox" defaultChecked={el.status} onClick={() => dispatch(editStatusUser(el.id))} />
              <div className='flex gap-3'>
                <button onClick={() => (deleteUserZ(el.id), dispatch(deleteUser(el.id)), setDataA(dataA.filter(e => e.id != el.id)))}>Delete</button>
                <button onClick={() => (setUser(el), setOpenEdit(true))}>Edit</button>
                <button onClick={()=>(setOpenInfo(true),setInfoUser(el))}>Info</button>
              </div>
            </div>
          )
        })}

        <AddModal open={open} setOpen={setOpen} />
        <EditModal openEdit={openEdit} setOpenEdit={setOpenEdit} user={user} />
        <InfoModal infoUser={infoUser} openInfo={openInfo} setOpenInfo={setOpenInfo01}/>
      </div>
    </>
  )
}

export default App