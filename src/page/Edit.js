import React , {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

var ids = [];

export const Eidcomponent = (props) => {
  ids = props;
  return(props);
}

export default function Edit(props) {

    var id = props.data;
    const [open,setOpen] = useState(false);
    const [invoicecurrency,setInvoicecurrency] = useState();
    const [customerpaymentterm,setCustomerpaymentterm] = useState();
    const [defcustpayterms,setDefcustpayterms] = useState();
    const [definvoicecur,setDefinvoicecur] = useState();


    const addstyle = {
        textStyle:{
            position:"relative",
            marginRight:"2px",
        },
    }

    useEffect(() => {
        if(id.length === 1)
        { 
            const slno = id[0];
            axios.get(`http://localhost:8080/demo/retrieve?sl_no=${slno}`)
            .then((res) => {
                setDefinvoicecur(res.data[0].invoice_currency);
                setDefcustpayterms(res.data[0].cust_payment_terms);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(invoicecurrency + " " + customerpaymentterm);
        const slno = id[0];
        axios.get(`http://localhost:8080/demo/edit?inv_curr=${invoicecurrency}&cust_pay_term=${customerpaymentterm}&sl_no=${slno}`)
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
            <Button variant="outlined" style={{width:"10%", height:"4%", color:"white"}} onClick={(e) => handleClickOpen(e)} disabled={id.length !== 1}>EDIT</Button>
            <Dialog open={open} close={handleClose}>
                <DialogTitle>EDIT</DialogTitle>
                <DialogContent style={{height:"30vh"}}>
                    <div>
                    <TextField
                        style={addstyle.textStyle}
                        label="Invoice Curreny" 
                        value={definvoicecur}
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleinvoicecurrency}
                    />
                    <TextField
                        style={addstyle.textStyle}
                        label="Cutomer Payment Terms" 
                        value={defcustpayterms}
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handlecustomerpaymentterms}
                    />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>Edit</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
  )
}
