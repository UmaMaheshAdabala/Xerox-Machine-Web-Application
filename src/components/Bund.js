import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Log from './images/user_1.png'
import { hover } from "@testing-library/user-event/dist/hover";

function Nav(){
    
    return(
        <div className="Nav">
            <div className="row" style={{height:"100vh"}}>
                <div className="col-md-2" style={{background:"orange",height:"100%"}}>
                    
                    <p><img src={Log} style={{width:"90px",marginLeft:"25px",marginTop:"10px"}} /></p>
                    <ul style={{listStyleType:""}}>
                        <b>
                        <li className="list" style={{paddingTop:"20px",fontSize:"15px"}}>Dashboard</li>
                        <li className="list"  style={{paddingTop:"20px",fontSize:"15px"}}>Bundles Info</li>
                        <li className="list"  style={{paddingTop:"20px",fontSize:"15px"}}>Machine Usage Entry</li>
                        <li className="list"  style={{paddingTop:"20px",fontSize:"15px"}}>Repairs & Maintenance</li>
                        <li className="list"  style={{paddingTop:"20px",fontSize:"15px"}}>User Reports</li></b>
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default Nav;
