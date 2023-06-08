import React from "react";
import { Avatar, Grid, Paper, TextField, Button } from "@mui/material";
import NoEncryptionGmailerrorredOutlinedIcon from "@mui/icons-material/NoEncryptionGmailerrorredOutlined";
import SendIcon from "@mui/icons-material/Send";
const Login = () => {
  const paperStyle = {
    padding: 18,
    height: "50vh",
    width: 300,
    margin: "3cm auto ",
  };
  const avatarStyle = {
    backgroundColor: "red",
  };
  return (
    <div className="Login">
      <Grid align="center">
        <Paper elevation={15} style={paperStyle}>
          <Avatar style={avatarStyle}>
            <NoEncryptionGmailerrorredOutlinedIcon />
          </Avatar>
          <h3> Sign In </h3>
          <TextField
            id="standard-basic"
            label="Number"
            variant="standard"
            placeholder="enter the number "
            required
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="OTP"
            variant="standard"
            placeholder="enter the OTP"
            required
          />
          <br /> <br /> <br />
          <Button variant="contained" endIcon={<SendIcon />}>
            Send OTP
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
