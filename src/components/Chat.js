import {React, useState} from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import {Button, FormControl, InputLabel, Input, IconButton} from '@material-ui/core';
import { Route, Link, Switch} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";

import Login from './Login';
import Register from './Register';
import db from '../firebase';
import firebase from '../firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function Chat() {
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

                            <Input
                                placeholder='Enter a message...'
                                className="app__input"
                                value={input}
                                onChange={event => setInput(event.target.value)}/>
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
