import React, {useState, useEffect} from 'react';
import {Button, FormControl, InputLabel, Input, IconButton} from '@material-ui/core';
import Message from './components/Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import './App.css';
import SendIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {BrowserRouter as Router} from "react-router-dom";
import {Switch, Route, Link} from "react-router-dom";
import Header from './components/Header';
import Chat from './components/Chat';
import { Spring } from 'react-spring/renderprops';


function App() {
    const [input,
        setInput] = useState('');
    const [messages,
        setMessages] = useState([
        {
            username: 'bren',
            message: 'hey guys'
        }, {
            username: 'jesus',
            message: 'nobody asked u bro'
        }
    ]);

    const [username,
        setUsername] = useState("");

    useEffect(() => {
        db
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => ({
                    id: doc.id,
                    message: doc.data()
                })))
            })
    }, [])

    useEffect(() => {
        setUsername(prompt('please enter your name'));
        return () => {}
    }, [])

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
        <div className="App">

            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Spring
                            from={{
                            opacity: 0,
                            marginTop: -500
                        }}
                            to={{
                            opacity: 1,
                            marginTop: 0
                        }}>


{props => (

<div style={props}>
<div
className="brandlogo"
style={{
display: 'flex',
flexDirection: 'column'
}}>

<a href="/">
    <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
</a>

<h2>Welcome, Tasnim</h2>

</div>
</div>

)}




                        </Spring>

                        <form
                            className="app__form"
                            style={{
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

                        <FlipMove>
                            {messages.map(({id, message}) => (<Message key={id} username={username} message={message}/>))
}
                        </FlipMove>

                    </Route>
                    <Route path="/register">
                        <Header/>
                    </Route>
                    <Route path="/login">
                        <Header/>
                    </Route>
                </Switch>
            </Router>

        </div>

    )
}

export default App;