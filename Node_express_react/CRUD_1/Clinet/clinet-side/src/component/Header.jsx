import React, { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom'
import './header.css'
function Header() {
  const [active, setactive] = useState("Home");
  const location = useLocation()
  useEffect(()=>{
    if (location.pathname === "Home") {
        setactive("Home")
    }else if (location.pathname === "LogOut") {
        setactive("LogOut")
    }else if (location.pathname === "AddUser") {
        setactive("AddUser")
    }
  },[location])
  return (
    <div className="header">
      <p className="logo">User Managment System</p>
      <div className="header-right">
        <Link to='/'>
            <p className={`${active === 'Home'?"active":""}`} onClick={()=>setactive("Home")}>Home</p>
        </Link>
        <Link to='/add'>
            <p className={`${active === 'AddUser'?"active":""}`} onClick={()=>setactive("AddUser")}>Add User</p>
        </Link>
        <Link to='/login'>
            <p className={`${active === 'LogOut'?"active":""}`} onClick={()=>setactive("LogOut")}>LogOut</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
