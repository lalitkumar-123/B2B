import React , {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

var ids = [];

export const Idcomponent = (props) => {
  ids = props;
  return(props);
}

export default function Delete(props) {

  var id = props.data;
  const [open,setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      let sz = id.length;
      for(let i = 0; i < sz; i++) 
      {
        axios.get(`http://localhost:8080/demo/delete?sl_no=${id[i]}`)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
      }
      handleClose();
      window.location = "/";
  }

  return (
    <>
        <Button variant="outlined" style={{width:"10%", height:"4%", color:"white"}} onClick={(e) => handleClickOpen(e)} disabled={id.length < 1}>DELETE</Button>
        <Dialog open={open} close={handleClose}>
                <DialogTitle>DELETE RECORDS ?</DialogTitle>
                <DialogContent style={{height:"30vh"}}>
                    <div>
                      <p>Are you sure you want to delete these records?</p>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>Delete</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
    </>
  )
}
