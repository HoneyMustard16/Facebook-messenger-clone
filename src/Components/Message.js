import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React, { forwardRef } from "react"; // keep track messages that move to use flip-move animation
import "../Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  // destruc the props
  // message is a function, forwardRef is higher order component

  const isUser = username === message.username;

  return (
    <>
      <div ref={ref} className={`messageCard ${isUser && `message__user`} `}>
        <Card
          variant="outlined"
          className={isUser ? "message__userCard" : "message_guestCard"}
        >
          <CardContent>
            <Typography color="white" variant="h5" component="h2">
              {!isUser && `${message.username || 'Unknwon User'}: `} {message.message}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
});

export default Message;
