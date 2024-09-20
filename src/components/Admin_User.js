import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
// import { Form } from "react-router-dom";
// import { color } from "@mui/system";
const Userreport = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    alert("Data Submitted");
  };
  return (
    <div className="row">
      <div className="container">
        <div className="row">
          <div className="row" style={{ marginTop: "10px" }}>
            <div
              className="col-md-12"
              style={{ textAlign: "center", color: "#004d40" }}
            >
              <h2>User Reports</h2>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div
            className="col-md-10"
            style={{
              border: "solid #00695c 2px",
              borderRadius: "10px",
              padding: "20px",
              background: "#b9f6ca",
              boxShadow: "2px 2px 2px 2px",
            }}
          >
            <div>
              <center>
                <h2>User Reports(counts)</h2>
              </center>
            </div>
            <div
              style={{ backgroundColor: "#00695c", width: "100%", height: 3 }}
            >
              <hr></hr>
            </div>
            <br></br>
            {/* <center> */}
            <span>
              <button>Excel</button>
            </span>
            <span style={{ marginLeft: 8 }}>
              <button>Pdf</button>
            </span>
            {/* s</center> */}
            {/* <center> */}
            <span style={{ marginLeft: "10px", float: "right" }}>
              <label for="id2">SearchTo: </label>
              <input type="textarea" name="spn" id="id2" required />
            </span>
            {/* </center> */}

            <Table
              responsive
              className="table table-striped table-bordered table-hover table-responsive"
            >
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
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Userreport;
