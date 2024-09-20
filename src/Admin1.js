import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.js";
import Nav from "./components/nav.js";
import Bundles from "./components/Bundles.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Reapair from "./components/Reapair";
import User from "./components/User";
import Machine from "./components/Machine";
import Admin_nav from "./components/Admin_nav";
import Admin_Dash from "./components/Admin_Dash.js";
import Admin_Bundles from "./components/Admin_Bundles";
import Admin_Login from "./components/Admin_Login";
import Admin_Mac_Info from "./components/Admin_Mac_Info";
import Admin_Mac_Usage from "./components/Admin_Mac_Usage";
import Admin_Mac_Reports from "./components/Admin_Mac_Reports";
import Admin_Repairs from "./components/Admin_Repairs";
import Admin_User from "./components/Admin_User";

function App() {
  return (
    <div>
      {/* <h2>My React App</h2> */}
      <BrowserRouter>
        <Header />
        <div className="row" style={{ background: "#F0FFFF" }}>
          <div className="col-md-2">
            <Admin_nav />
          </div>
          <div
            className="col-md-10"
            style={{
              height: "84.5vh",
              overflowY: "scroll",
              background: "#F0FFFF",
            }}
          >
            <Routes>
              <Route path="/" element={<Admin_Dash />} />
              <Route path="/Admin_Login" element={<Admin_Login />} />

              <Route path="/Admin_Mac_Info" element={<Admin_Mac_Info />} />
              <Route path="/Admin_Bundles" element={<Admin_Bundles />} />

              <Route path="/Admin_Mac_Usage" element={<Admin_Mac_Usage />} />
              <Route path="/Admin_Repairs" element={<Admin_Repairs />} />
              <Route
                path="/Admin_Mac_Reports"
                element={<Admin_Mac_Reports />}
              />
              <Route path="/Admin_User" element={<Admin_User />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
