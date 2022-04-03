import React , {useState,useEffect} from 'react';
import Header from './Header.js';
import Button from '@mui/material/Button';
import Add from './Add.js';
import Edit from './Edit.js';
import Footer from './Footer.js';
import Delete from './Delete.js';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import { Idcomponent } from './Delete.js';
import { Eidcomponent } from './Edit.js';
import axios from 'axios';
import '../css/Dashboard.css';

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

const columns = [
  { field: 'id', headerName: 'Sl No', width: 140},
  { field: 'business_code', headerName: 'Business Code', width: 140},
  { field: 'cust_number', headerName: 'Customer Number', width: 140},
  { field: 'clear_date', headerName: 'Clear Date', width: 140},
  { field: 'buisness_year', headerName: 'Business Year', width: 140},
  { field: 'doc_id', headerName: 'Document Id', width: 140},
  { field: 'posting_date', headerName: 'Posting Date', width: 140},
  { field: 'document_create_date', headerName: 'Document Create Date', width: 180},
  { field: 'due_in_date', headerName: 'Due Date', width: 140},
  { field: 'invoice_currency', headerName: 'Invoice Currency', width: 140},
  { field: 'document_type', headerName: 'Document Type', width: 140},
  { field: 'posting_id', headerName: 'Posting Id', width: 140},
  { field: 'total_open_amount', headerName: 'Total Open Amount', width: 160},
  { field: 'baseline_create_date', headerName: 'Baseline Create Date', width: 160},
  { field: 'cust_payment_terms', headerName: 'Customer Payment Terms', width: 200},
  { field: 'invoice_id', headerName: 'Invoice Id', width: 140},
];

function Dashboard() 
{
    console.log(window.innerHeight);
    const [custnumber,setCustnumber] = useState();
    const [tabledata,setTabledata] = useState([]);
    const [open,setOpen] = useState(false);
    const [businessyear,setBusinessyear] = useState();
    const [documentid,setDocumentid] = useState();
    const [invoiceid,setInvoiceid] = useState();
    const [customernum,setCustomernum] = useState();
    const [ids,setIds] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlecustomernum = (e) => {
        setCustomernum(e.target.value);
    }

    const handlebusinessyear = (e) => {
        setBusinessyear(e.target.value);
    }

    const handledocumentid = (e) => {
        setDocumentid(e.target.value);
    }

    const handleinvoiceid = (e) => {
        setInvoiceid(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(customernum + " " + businessyear + " " + documentid+ " " + invoiceid);
        axios.get(`http://localhost:8080/demo/adv_search?doc_id=${documentid}&inv_id=${invoiceid}&buis_year=${businessyear}&cus_number=${customernum}`)
        .then((res) => {setTabledata(res.data)})
        .catch((error) => {console.log(error);})
        handleClose();
    }

    useEffect(() => {
        const url = `http://localhost:8080/demo/search?c_number=${custnumber}`;
        axios({baseURL:url,method:'GET'})
        .then((res) => setTabledata(res.data))
        .catch((error) => console.log(error));
    },[custnumber]);

    useEffect(() => {
        const url = "http://localhost:8080/demo/table";
        axios({baseURL:url,method:'GET'})
        .then((res) => setTabledata(res.data))
        .catch((error) => console.log(error));
    }, []);

    useEffect(() =>{
        Idcomponent(ids);
        Eidcomponent(ids);
    },[ids]);

    return(
        <>
        <Header/>
        <div style={{margin: "1rem", color: "white", textAlign:"center", display:"flex"}} className="dashboard">
            <Button variant="outlined" style={{width:"10%", height:"4%", color:"white"}}>PREDICT</Button>
            <Button variant="outlined" style={{width:"14%", height:"4%", color:"white"}}>ANALYTICS VIEW</Button>
            <Button variant="outlined" style={{width:"16%", height:"4%", color:"white"}} onClick={(e) => handleClickOpen(e)}>ADVANCED SEARCH</Button>
            <Dialog open={open} close={handleClose}>
                    <DialogTitle>ADVANCED SEARCH</DialogTitle>
                    <DialogContent style={{height:"30vh"}}>
                        <div>
                        <TextField
                            style={addstyle.textStyle}
                            label="Doc Id" 
                            required
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handledocumentid}
                        />
                        <TextField
                            style={addstyle.textStyle}
                            label="Invoice Id" 
                            required
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleinvoiceid}
                        />
                        <TextField
                            style={addstyle.textStyle}
                            label="Customer Number" 
                            required
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handlecustomernum}
                        />
                        <TextField
                            style={addstyle.textStyle}
                            label="Business Year" 
                            required
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handlebusinessyear}
                        />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleSubmit}>Search</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            <input type="text" placeholder="Search Customer Id" className="input" onChange={(e) => {setCustnumber(e.target.value)}}/>  
            <Add/>
            <Edit data={ids}/>
            <Delete data={ids}/>
        </div>
        <div style={{ height: 400, width: '100%'}}>
          <DataGrid
              rows={tabledata}
              columns={columns}
              rowHeight={27}
              style={{ display:"flex",justifyContent:"center", color:"white"}}
              pageSize={10}
              disableColumnMenu
              rowsPerPageOptions={[10]}
              checkboxSelection
              onSelectionModelChange={(id) => {
                setIds(id);
              }}
          />
        </div>
        <Footer/>
        </>
    )
}

export default Dashboard;
