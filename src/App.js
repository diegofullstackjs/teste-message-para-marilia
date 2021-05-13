import React from 'react'
import SimpleModal from './components/modal'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
function CustomComponet(){
  return (
    <div>Modal Smples</div>
  )
}
function App() {
  const [open,setOpen] = React.useState(false)
  const [openMessageSuccess,setOpenMessageSucces] = React.useState(false)
  const [openMessageError,setOpenMessageError] = React.useState(false)
  const [message,setMessage] = React.useState(null)
  const openModal = () => setOpen(!open)
  const SuccesMessage = msg => {
    setMessage(msg)
    setOpenMessageSucces(true)
  }
  const CallBackError = () => setOpenMessageError(true)
  React.useState(() => console.log(open),[open])
  return (
    <React.Fragment>
     <Button color="primary" onClick={openModal}>Abrir modal</Button>
    <SimpleModal isOpen={open} callBackSucces={SuccesMessage} callBackError={CallBackError} >
      <CustomComponet />
    </SimpleModal>
    <Snackbar 
     open={openMessageSuccess}
     onClose={() => setTimeout(() => setOpenMessageSucces(false),2000)}
     message={message? message : 'erro inesperado'}
    />
    <Snackbar 
     open={openMessageError}
     onClose={() => setTimeout(() => setOpenMessageError(false),2000)}
     message="Essa mensagem esta aparecendo porque os dados não foi enviado com sucesso!"
    />
    </React.Fragment>
  );
}

export default App;
