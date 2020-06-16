import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const Toast = ({ open, handleClose, severity, children }) => (
  <Snackbar
    open={open}
    autoHideDuration={2000}
    onClose={handleClose}
  >
    <Alert
      onClose={handleClose}
      variant="filled"
      severity={severity}
    >
      {children}
    </Alert>
  </Snackbar>
)

export default Toast;