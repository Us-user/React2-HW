import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { deleteUserR } from '../store/dataSlice'
import { useAtom } from 'jotai'
import { deleteUserAtom } from '../store/Jotai'
import { dataZustand } from '../store/Zustand'

const DeleteModal = ({ openDelete, setOpenDelete, idDelete }) => {
    const dispatch = useDispatch()
    const [, deleteUserA] = useAtom(deleteUserAtom)
      const { deleteUserZ } = dataZustand()
    
    return (
        <Dialog open={openDelete} onClose={() => setOpenDelete(false)}
        >
            <DialogTitle>Delete</DialogTitle>
            <DialogContent>
                <Typography>Are you sure what you want Delete User?</Typography>
            </DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={() => setOpenDelete(false)}>Cansel</Button>
                <Button color='error' variant='contained' onClick={() => (
                    dispatch(deleteUserR(idDelete)),
                    deleteUserA(idDelete),
                    deleteUserZ(idDelete),
                    setOpenDelete(false)

            )} >Delete</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteModal