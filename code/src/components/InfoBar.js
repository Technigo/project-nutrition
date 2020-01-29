import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { ui } from '../reducers/ui.js'

export const InfoBar = () => {
  
  const snackbar = useSelector(state => state.ui.snackbar)
  const dispatch = useDispatch()
  
  const handleClose = () => {
    dispatch(ui.actions.setShowSnackbar([false, '']))
  };

  return (
    <Snackbar 
      open={snackbar.show} 
      autoHideDuration={4000} 
      onClose={handleClose}
    >
      <MuiAlert 
        onClose={handleClose}  
        severity={snackbar.severity}
        variant="filled"
        elevation={6}
      >
        {snackbar.message}
        
     </MuiAlert>
    </Snackbar>
  )
}



