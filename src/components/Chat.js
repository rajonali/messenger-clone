import {React, useState} from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles'


import {Button, FormControl, InputLabel, Input, IconButton} from '@material-ui/core';
import { Route, Link, Switch} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";

import Login from './Login';
import Register from './Register';
import db from '../firebase';
import firebase from '../firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';



function Chat() {

    const BootstrapInput = withStyles((theme) => ({
        root: {
          'label + &': {
            marginTop: theme.spacing(3),
          },
        },
        input: {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: theme.palette.common.white,
          border: '1px solid #ced4da',
          fontSize: 16,
          width: 'auto',
          padding: '10px 12px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
          },
        },
      }))(InputBase);

    const [username,
        setUsername] = useState("");

    const [input,
        setInput] = useState("");

    const sendMessage = (event) => {
        event.preventDefault();

        db
            .collection('messages')
            .add({
                message: input,
                username: username,
                timestamp: firebase
                    .firestore
                    .FieldValue
                    .serverTimestamp()
            })
        setInput('');
    }

    return (
            <form className="app__form" style={{
                flex: '1'
            }}>
                <Card className="app__card">
                    <CardContent>

                        <FormControl className="app__formControl">



                        <BootstrapInput id="bootstrap-input" placeholder='Enter a message...'
                                className="app__input"
                                value={input}   
                                onChange={event => setInput(event.target.value)} />
                            <IconButton
                                className="app__iconButton"
                                disabled={!input}
                                color="primary"
                                onClick={sendMessage}>
                                <SendIcon/>
                            </IconButton>
                        </FormControl>
                    </CardContent>
                </Card>

            </form>
    )
}

export default Chat
