import { FormControl, InputLabel, Input, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./Components/Message";
import firebase from "firebase";
import db from "./Databases/firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // Listener for ever changes that happen in database and return the value as object
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() })) // id anf message is a unique key
        );
      });
  }, []);

  // useEffect: run code on a condition
  useEffect(() => {
    // run code here..
    setUsername(prompt("Please enter your name"));
    // will runs once if the condition is empty when the components is loaded
  }, []); //Condition

  const sendMessage = (e) => {
    e.preventDefault(); // prevent refresh. every onClick onSubmt etc will send event or e
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"
        alt=""
        style={{ margin: "20px" }}
      />
      <h1>Hello {username} welcome to the chat app </h1>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} /> //pass the object instead of the array and destruc in components
        ))}
      </FlipMove>

      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter message</InputLabel>
          <Input
            className="app__Input"
            type="text"
            onChange={(event) => setInput(event.target.value)}
            value={input}
          />
          <IconButton
            className="app__iconButton"
            variant="contained"
            color="primary"
            disabled={!input}
            type="submit"
            onClick={(e) => sendMessage(e)}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
