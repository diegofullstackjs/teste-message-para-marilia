import { Modal } from '@material-ui/core';
import React,{useEffect} from 'react';

// import { Container } from './styles';
function SimpleModal({isOpen,callBackSucces,callBackError,children}) {
 const [open,setOpen] = React.useState(false)
 useEffect(() => {
    setOpen(isOpen)
 },[isOpen])
 const handleClose = () => {
     setOpen(!open)
     callBackSucces('A MARILIA E MUITO GOSTOSA ')
 }
  return (
      <Modal
       open={open}
       onClose={handleClose}
       aria-labelledby="simple-modal-title"
       aria-describedby="simple-modal-description"
      >
          {children}
      </Modal>
  )
}

export default SimpleModal;