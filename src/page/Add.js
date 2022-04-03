import React , {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import '../css/Add.css'
import axios from 'axios';

const addstyle = {
  textStyle:{
    position:"relative",
    marginLeft:"2.5rem",
  },
  dateStyle:{
    position:"relative",
    marginLeft:"2.5rem",
    width:"221px",
  }
}

export default function Add() 
{
    const [businesscode,setBusinesscode] = useState();
    const [customername,setCustomername] = useState();
    const [cleardate,setCleardate] = useState();
    const [businessyear,setBusinessyear] = useState();
    const [documentid,setDocumentid] = useState();
    const [postingdate,setPostingdate] = useState();
    const [documentcreatedate,setDocumentcreatedate] = useState();
    const [duedate,setDuedate] = useState();
    const [invoicecurrency,setInvoicecurrency] = useState();
    const [documenttype,setDocumenttype] = useState();
    const [postingid,setPostingid] = useState();
    const [totalopenamount,setTotalopenamount] = useState();
    const [baselinecreatedate,setBaselinecreatedate] = useState();
    const [customerpaymentterm,setCustomerpaymentterm] = useState();
    const [invoiceid,setInvoiceid] = useState();
    const [open,setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlebusinesscode = (e) => {
        setBusinesscode(e.target.value);
    }

    const handlecustomername = (e) => {
        setCustomername(e.target.value);
    }

    const handlecleardate = (e) => {
        setCleardate(e.target.value);
    }

    const handlebusinessyear = (e) => {
        setBusinessyear(e.target.value);
    }

    const handledocumentid = (e) => {
        setDocumentid(e.target.value);
    }

    const handlepostingdate = (e) => {
        setPostingdate(e.target.value);
    }

    const handledocumentcreatedate = (e) => {
        setDocumentcreatedate(e.target.value);
    }

    const handleduedate = (e) => {
        setDuedate(e.target.value);
    }

    const handleinvoicecurrency = (e) => {
        setInvoicecurrency(e.target.value);
    }

    const handledocumenttype = (e) => {
        setDocumenttype(e.target.value);
    }

    const handlepostingid = (e) => {
        setPostingid(e.target.value);
    }

    const  handletotalopenamount = (e) => { 
        setTotalopenamount(e.target.value);
    }

    const handlebaselinecreatedate = (e) => {
        setBaselinecreatedate(e.target.value);
    }

    const handlecustomerpaymentterms = (e) => {
        setCustomerpaymentterm(e.target.value);
    }

    const handleinvoiceid = (e) => {
        setInvoiceid(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(businesscode + " " + customername + " " + cleardate + " " + businessyear + " " + documentid + " " + postingdate + " " + documentcreatedate + " " + duedate + " " + invoicecurrency + " " + documenttype + " " + postingid + " " + totalopenamount + " " + baselinecreatedate + " " + customerpaymentterm + " " + invoiceid);
        axios.get(`http://localhost:8080/demo/add?b_code=${businesscode}&c_number=${customername}&c_date=${cleardate}&b_year=${businessyear}&doc_id=${documentid}&pos_date=${postingdate}&doc_create_date=${documentcreatedate}&due_date=${duedate}&invoice_curr=${invoicecurrency}&doc_type=${documenttype}&posting_id=${postingid}&total_open=${totalopenamount}&bas_create_date=${baselinecreatedate}&cust_pay_term=${customerpaymentterm}&inv_id=${invoiceid}`)
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
            <Button variant="outlined" style={{width:"10%", height:"4%", color:"white"}} onClick={(e) => handleClickOpen(e)}>ADD</Button>
            <Dialog open={open} close={handleClose} fullWidth>
                <DialogTitle>ADD</DialogTitle>
                <DialogContent>
                    <div>
                    <TextField
                        className="inputfield"
                        style={addstyle.textStyle}
                        label="Business Code" 
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handlebusinesscode}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.textStyle}
                        label="Customer Name"
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handlecustomername}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.dateStyle}
                        label="Clear Date"
                        required
                        type="date"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handlecleardate}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.textStyle}
                        label="Business Year"
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handlebusinessyear}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.textStyle}
                        label="Document Id"
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handledocumentid}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.dateStyle}
                        label="Posting Date"
                        required
                        type="date"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handlepostingdate}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.dateStyle}
                        label="Document Create Date"
                        required
                        type="date"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handledocumentcreatedate}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.dateStyle}
                        label="Due Date"
                        required
                        type="date"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleduedate}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.textStyle}
                        label="Invoice Curreny"
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleinvoicecurrency}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.textStyle}
                        label="Document Type"
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handledocumenttype}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.textStyle}
                        label="Posting Id"
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handlepostingid}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.textStyle}
                        label="Toatl Open Amount"
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handletotalopenamount}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.dateStyle}
                        label="Baseline Create Date"
                        required
                        type="date"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handlebaselinecreatedate}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.textStyle}
                        label="Customer Payment Terms"
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handlecustomerpaymentterms}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.textStyle}
                        label="Invoice Id"
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleinvoiceid}
                    />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>Add</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}