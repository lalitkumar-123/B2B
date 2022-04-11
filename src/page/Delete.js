import React , {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function Delete(props) {

  var id = props.data;
  const [open,setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      let sz = id.length;
      for(let i = 0; i < sz; i++) 
      {
        await axios.get(`http://localhost:8080/demo/delete?sl_no=${id[i]}`)
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
        <Button variant="outlined" style={{width:"10%", height:"4%", color:"white"}} onClick={(e) => handleClickOpen(e)} disabled={id.length < 1} disableRipple>DELETE</Button>
        <Dialog open={open} close={handleClose}>
                <DialogTitle style={{backgroundColor:"#58687e", color:"white"}}>Delete Records ?</DialogTitle>
                <DialogContent style={{height:"20vh", backgroundColor:"#58687e", color:"white"}}>
                    <div>
                      <p>Are you sure you want to delete these record[s]?</p>
                    </div>
                </DialogContent>
                <DialogActions style={{backgroundColor:"#58687e"}}>
                    <Button variant="outlined" onClick={handleSubmit} style={{width:"200px", color:"white"}} disableRipple>Delete</Button>
                    <Button variant="outlined" onClick={handleClose} style={{width:"200px", color:"white"}} disableRipple>Cancel</Button>
                </DialogActions>
            </Dialog>
    </>
  )
}
