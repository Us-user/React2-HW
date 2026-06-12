import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

const InfoModal = ({openInfo,setOpenInfo,user}) => {
  return (
    <Dialog open={openInfo} onClose={()=>setOpenInfo(false)}>
        <DialogTitle>About User</DialogTitle>
        <DialogContent sx={{
            width:'370px',
            display:'flex',
            flexDirection:'column',
            gap:4
        }}>
            <div className='flex justify-between'>
                <h2>Full Name:</h2>
                <h4>{user.name} {user.surname}</h4>
            </div>
            <div className='flex justify-between'>
                <h2>Email:</h2>
                <h4>{user.email}</h4>
            </div>
            <div className='flex justify-between'>
                <h2>Address:</h2>
                <h4>{user.address}</h4>
            </div>
            <div className='flex justify-between'>
                <h2>Age:</h2>
                <h4>{user.age}</h4>
            </div>
            <div className='flex justify-between'>
                <h2>Job:</h2>
                <h4>{user.job}</h4>
            </div>
            <div className='flex justify-between'>
                <h2>Status:</h2>
                <h4 className={user.status ? 'text-green-500 rounded-2xl p-1 px-3 bg-green-100' : 'text-red-600 bg-red-100 rounded-2xl p-1 px-3'}>{user.status ? "Active" : "Inactive"}</h4>
            </div>
        </DialogContent>
        <DialogActions>
            <Button variant='contained' onClick={()=>setOpenInfo(false)}>Close</Button>
        </DialogActions>

    </Dialog>
  )
}

export default InfoModal