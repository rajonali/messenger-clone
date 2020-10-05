import React from 'react';
import {Button, FormControl, InputLabel, Input, IconButton} from '@material-ui/core';
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Chat from './Chat';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import db from '../firebase';
import firebase from '../firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import MenuIcon from '@material-ui/icons/Menu';



function Header() {

    
    return (
        <header style={{display:'flex', padding:20, flexDirection:'row', backgroundColor:'', alignContent:'center',justifyContent:'space-between' }}>
<MenuIcon />

<div>

<div className="brandlogo" style={{display:'flex', flexDirection:'column'}}>
                
    <a href="/">            
                <img
                    src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
    </a>
    
    <h2>Welcome, Tasnim</h2>

            </div>

</div>
<div className="Header__buttons" style={{}}>
  <Link style={{textDecoration: "none"}} to="/login">
    <Button variant="outlined">
      Login
    </Button>
    </Link>
    <Link style={{textDecoration: "none"}} to="/register">
    <Button variant="outlined" >
      Register
    </Button>
    </Link>
</div>
    </header>

    )
}

export default Header
