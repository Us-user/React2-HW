import { useAtom } from 'jotai'
import React, { useEffect, useMemo, useState } from 'react'
import { dataAtom, deleteUserAtom } from './store/Jotai'
import { dataZustand } from './store/Zustand'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import store from './store/store'


import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { TiInfoLarge } from "react-icons/ti";
import DeleteModal from './components/DeleteModal'
import AddModal from './components/AddModal'
import { editStatus } from './store/dataSlice'
import EditModal from './components/EditModal'
import InfoModal from './components/InfoModal'

const App = () => {
  const [dataA] = useAtom(dataAtom)
  const { dataZ, deleteUserZ } = dataZustand()
  const { dataR } = useSelector((store: any) => store.dataSlice)
  const dispatch = useDispatch()

  const [idDelete, setIdDelete] = useState(null)
  const [openDelete, setOpenDelete] = useState(false)
  const [openAdd, setOpenAdd] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [user, setUser] = useState({})

  const [openInfo,setOpenInfo]=useState(false)

  const mainData = useMemo(() => {
    return dataA.map((el) => {
      let dr = dataR.find(e => e.id == el.id)
      let dz = dataZ.find(e => e.id == el.id)
      return {
        ...el,
        ...dr,
        ...dz
      }
    })
  }, [dataA, dataZ, dataR])

  useEffect(() => {
    setSearchData(mainData)
  }, [mainData])

  const [searchData, setSearchData] = useState(mainData)

  console.log(mainData);
  return (
    <div>
      <Box sx={{
        padding:2,
        display:'flex',
        gap:'23px'
      }}>
        <Button variant='contained' onClick={() => setOpenAdd(true)}>Add User</Button>
        <input className='rounded-2xl p-2 border-b outline-0' type="text" placeholder='Search...' onChange={(e) => setSearchData(mainData.filter((el) => el.name.toLowerCase().includes(e.target.value.toLowerCase().trim())))} />
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Job</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchData.map((el) => {
            return (
              <TableRow key={el.id}>
                <TableCell>{el.name} {el.surname}</TableCell>
                <TableCell>{el.email}</TableCell>
                <TableCell>{el.age}</TableCell>
                <TableCell>{el.job}</TableCell>
                <TableCell>{el.address}</TableCell>
                <TableCell sx={{
                  padding:'2px 10px',
                  color: el.status ? 'green' :'red',
                }}>{el.status ? "Active" : "Inactive"}</TableCell>
                <TableCell>
                  <IconButton onClick={() => (setOpenDelete(true), setIdDelete(el.id))}>
                    <MdDelete size={26} color='red' />
                  </IconButton>
                  <IconButton onClick={() => (setOpenEdit(true), setUser(el))}>
                    <MdEdit size={26} color='green' />
                  </IconButton>
                  <IconButton onClick={()=>(setUser(el), setOpenInfo(true))}>
                    <TiInfoLarge size={26} color='blue' />
                  </IconButton>
                  <input type="checkbox" checked={el.status} onClick={() => dispatch(editStatus(el.id))} />

                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <DeleteModal openDelete={openDelete} setOpenDelete={setOpenDelete} idDelete={idDelete} />
      <AddModal openAdd={openAdd} setOpenAdd={setOpenAdd} />
      <EditModal openEdit={openEdit} setOpenEdit={setOpenEdit} user={user} />
      <InfoModal openInfo={openInfo} setOpenInfo={setOpenInfo} user={user}/>
    </div>
  )
}

export default App