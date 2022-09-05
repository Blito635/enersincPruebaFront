import { Alert, AlertTitle, Button, IconButton, Snackbar } from "@mui/material";
import React,{ Fragment, useState} from "react";

const Notifay = (estado= false) => {
    const [open, setOpen] = useState(estado)
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    const action = (
          <Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              {/* <CloseIcon fontSize="small" /> */}
            </IconButton>
          </Fragment>
          
        );
            
          return(
            <Snackbar
            open={open}
            autoHideDuration={600}
            onClose={handleClose}
            message="Note archived"
            action={action}
          />)
      }

export default Notifay