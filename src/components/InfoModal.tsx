import React from 'react'

const InfoModal = ({infoUser,openInfo,setOpenInfo}) => {
  return (
    <dialog open={openInfo} onClose={()=>setOpenInfo(false)}>
        

    </dialog>
  )
}

export default InfoModal