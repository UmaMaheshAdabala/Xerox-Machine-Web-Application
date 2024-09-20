import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { Form } from "react-router-dom";
import { color } from "@mui/system";
const User  = () => {  
    return (
        <div>
            <div className="row">
                <div  className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div><center><h2>Report</h2></center></div>
                            <div style={{backgroundColor:"orange",width:"100%",height:3}}><hr></hr></div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row" style={{justifyContent:"centre"}}>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                    <form>
                        <div className="input-container">
                        <label for="id1">From: </label>
                        <input type="email" name="frm" id="id4" required />
                        </div>
                        <div className="input-container">
                        <label for="id2">To: </label>
                        <input type="email" name="to" id="id5"required />
                        </div>
                        <div className="input-container">
                        <label for="id3">College Name</label>
                        <input type="textarea" name="clg" id="id6"required />
                        </div>
                        <div className="button-container">
                        <input type="submit" />
                        </div>
                    </form></div>
                    <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
                <div  className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div><center><h2>Machine Reports</h2></center></div>
                            <div style={{backgroundColor:"orange",width:"100%",height:3}}>.    </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4">
                            <br></br>
                            <center>
                            <span><button>Excel</button></span>
                            <span style={{marginLeft:8}}><button>Pdf</button></span></center>
                        </div>
                        <div className="col-md-4">
                            {/* <div style={{marginTop:20}}> */}
                            <br></br>
                            <center>
                            <span>Search</span>
                            <span>
                            <label for="id2">To: </label>
                            <input type="textarea" name="spn" id="id2"required />
                            </span></center>
                            {/* </div> */}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row" style={{justifyContent:"centre",marginTop:10}}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <Table striped>
                                <thead>
                                    <tr>
                                    <th>SNo</th>
                                    <th>User Id</th>
                                    <th>College</th>
                                    <th>No.of Bundles</th>
                                    <th>Bothside prints</th>
                                    <th>Oneside prints</th>
                                    <th>No.of prints</th>
                                    <th>Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td>1672[8360000]</td>
                                    <td>AEC</td>
                                    <td>388568</td>
                                    <td>985436</td>
                                    <td>8653342</td>
                                    <td>55467</td>
                                    <td>46466</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}



export default User;
