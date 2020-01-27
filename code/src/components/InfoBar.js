import React from 'react'
import { useSelector } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

/* Copy paste */
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/* Copy paste */
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const InfoBar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);/** Replace with useSelector in ui reducer */

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        This is a success message!
     </Alert>
    </Snackbar>
  )
}



