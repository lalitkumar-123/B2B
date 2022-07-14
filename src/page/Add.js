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
    marginLeft:"10rem",
    width:"140px",
  },
  dateStyle:{
    position:"relative",
    marginLeft:"2.5rem",
    width:"140px",
  }
}

export default function Add() 
{
    const [businesscode,setBusinesscode] = useState();
    const [customernumber,setCustomernumber] = useState();
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

    const handlecustomernumber = (e) => {
        setCustomernumber(e.target.value);
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

    const setDef = () => {
        setBusinesscode();
        setCustomernumber();
        setCleardate();
        setBusinessyear();
        setDocumentid();
        setPostingdate();
        setDocumentcreatedate();
        setDuedate();
        setInvoicecurrency();
        setDocumenttype();
        setPostingid();
        setTotalopenamount();
        setBaselinecreatedate();
        setCustomerpaymentterm();
        setInvoiceid();
        setOpen();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(businesscode === undefined || customernumber === undefined || cleardate === undefined || businessyear === undefined || documentid === undefined || postingdate === undefined || documentcreatedate === undefined || duedate === undefined || invoicecurrency === undefined || documenttype === undefined || postingid === undefined || totalopenamount === undefined || baselinecreatedate === undefined || customerpaymentterm === undefined || invoiceid === undefined)
        {
            alert("Please enter all required fields");
            setDef();
            handleClose();
            return;
        }
        await axios.get(`http://localhost:8080/demo/add?b_code=${businesscode}&c_number=${customernumber}&c_date=${cleardate}&b_year=${businessyear}&doc_id=${documentid}&pos_date=${postingdate}&doc_create_date=${documentcreatedate}&due_date=${duedate}&invoice_curr=${invoicecurrency}&doc_type=${documenttype}&posting_id=${postingid}&total_open=${totalopenamount}&bas_create_date=${baselinecreatedate}&cust_pay_term=${customerpaymentterm}&inv_id=${invoiceid}`)
        .then((res) => {
            console.log(res);
            alert("Data successfully added");
            setDef();
            handleClose();
        })
        .catch((error) => {
            console.log(error);
            alert("Data not added");
            setDef();
            handleClose();
        })
        window.location = "/";
    }
    
    return (
        <>
            <Button variant="outlined" style={{width:"10%", height:"4%", color:"white"}} onClick={(e) => handleClickOpen(e)} disableRipple>ADD</Button>
            <Dialog open={open} close={handleClose} fullWidth>
                <DialogTitle style={{backgroundColor:"#2d4250", color:"white"}}>Add</DialogTitle>
                <DialogContent style={{height:"60vh", backgroundColor:"#2d4250", color:"white"}}> 
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
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.textStyle}
                        label="Customer Number"
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handlecustomernumber}
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
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
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
                    />
                    <br/>
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
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
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
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
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
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
                    />
                    <br/>
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
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
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
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
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
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
                    />
                    <br/>
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
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
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
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
                    />
                    <TextField
                        className="inputfield"
                        style={addstyle.textStyle}
                        label="Total Open Amount"
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handletotalopenamount}
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
                    />
                    <br/>
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
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
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
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
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
                        size="small"
                        variant='filled'
                        inputProps={{ style: {color: 'black', backgroundColor:'aliceblue'}}}
                    />
                    </div>
                </DialogContent>
                <DialogActions style={{backgroundColor:"#2d4250"}}>
                    <Button variant="outlined" onClick={handleSubmit} style={{width:"290px", color:"white"}} disableRipple>Add</Button>
                    <Button variant="outlined" onClick={handleClose} style={{width:"290px", color:"white"}} disableRipple>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}