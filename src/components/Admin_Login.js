// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin_Login.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function Admin_Login() {
  const [send, setSend] = useState({
    frm: "",
    to: "",
  });
  const handleChange = (e) => {
    setSend((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
    console.log(send);
    // e.preventDefault();
    // // console.log(e.target.value);
    // alert("Data Submitted");
  };
  const postSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/postdatalog", { send }).then((res) => {
      console.log(res.data);
      alert("success");
    });
    // alert('success')
  };
  const [houses, sethouses] = useState([]);
  var ind = 0;

  useEffect(() => {
    axios
      .get("http://localhost:5000/getDatalog")
      .then((res) => sethouses(res.data));
  });
  return (
    <div className="container" id="m">
      <div className="row">
        <div className="col-md-12">
          <center>
            <h2>Logins Info</h2>
          </center>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <div
          className="col-md-4"
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
              <h2>Report</h2>
            </center>
          </div>
          <div style={{ backgroundColor: "#00695c", width: "100%", height: 3 }}>
            <hr></hr>
          </div>
          <div>
            <form onSubmit={postSubmit}>
              <div className="input-container">
                <label for="id1">UserName</label>
                <input
                  type="text"
                  name="frm"
                  id="id4"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label for="id2">Password</label>
                <input
                  type="text"
                  name="to"
                  id="id5"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="button-container">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10" id="main">
          <div className="container">
            <div className="row" style={{ paddingTop: "10px" }}>
              <div className="col-md-12">
                <div className="row">
                  <div
                    className="col-md-3"
                    style={{ textAlign: "center", fontSize: "30px" }}
                  >
                    <span>LoginInfo</span>
                  </div>
                  <div className="col-md-6"></div>
                  <div className="col-md-3" style={{ textAlign: "center" }}>
                    <button>Add</button>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    background: "#00897b",
                    height: "5px",
                    marginTop: "10px",
                  }}
                ></div>
                <div className="row" id="tabledata">
                  <Table responsive style={{ borderRadius: "10px" }}>
                    <thead>
                      <tr>
                        <td>S.No</td>
                        <td>UserName</td>
                        <td>Password</td>
                        {/* <td>Actions</td> */}
                      </tr>
                    </thead>
                    {houses.map((val, key) => {
                      ind++;

                      return (
                        <tr key={key}>
                          <td>{ind}</td>
                          <td>{val.frm}</td>
                          <td>{val.to}</td>
                        </tr>
                      );
                    })}
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}
export default Admin_Login;
