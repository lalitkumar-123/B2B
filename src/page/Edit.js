import React , {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function Edit(props) {

    var id = props.data;
    const [open,setOpen] = useState(false);
    const [invoicecurrency,setInvoicecurrency] = useState();
    const [customerpaymentterm,setCustomerpaymentterm] = useState();

    const addstyle = {
        textStyle:{
            position:"relative",
            marginRight:"2px",
        },
    }

    useEffect( async () => {
        if(id.length === 1)
        { 
            const slno = id[0];
            await axios.get(`http://localhost:8080/demo/retrieve?sl_no=${slno}`)
            .then((res) => {
                setInvoicecurrency(res.data[0].invoice_currency);
                setCustomerpaymentterm(res.data[0].cust_payment_terms);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    },[open]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleinvoicecurrency = (e) => {
        setInvoicecurrency(e.target.value);
    }

    const handlecustomerpaymentterms = (e) => {
        setCustomerpaymentterm(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const slno = id[0];
        console.log(invoicecurrency + " " + customerpaymentterm);
        await axios.get(`http://localhost:8080/demo/edit?inv_curr=${invoicecurrency}&cust_pay_term=${customerpaymentterm}&sl_no=${slno}`)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
        handleClose();
        window.location = "/";
    }

    return (
        <>
            <Button variant="outlined" style={{width:"10%", height:"4%", color:"white"}} onClick={(e) => handleClickOpen(e)} disabled={id.length !== 1} disableRipple>EDIT</Button>
            <Dialog open={open} close={handleClose}>
                <DialogTitle style={{backgroundColor:"#2d4250", color:"white"}}>Edit</DialogTitle>
                <DialogContent style={{height:"20vh", backgroundColor:"#2d4250", color:"white"}}>
                    <div>
                    <TextField
                        style={addstyle.textStyle}
                        label="Invoice Curreny" 
                        value={invoicecurrency}
                        required
                        margin="normal"
                        variant="filled"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleinvoicecurrency}
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
                    />
                    <TextField
                        style={addstyle.textStyle}
                        label="Cutomer Payment Terms" 
                        value={customerpaymentterm}
                        required
                        margin="normal"
                        variant="filled"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handlecustomerpaymentterms}
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
                    />
                    </div>
                </DialogContent>
                <DialogActions style={{backgroundColor:"#2d4250"}}>
                    <Button variant="outlined" onClick={handleSubmit} style={{width:"235px", color:"white"}} disableRipple>Edit</Button>
                    <Button variant="outlined" onClick={handleClose} style={{width:"235px", color:"white"}} disableRipple>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
  )
}
