import { useState } from "react";
import { Avatar, Grid, Paper, TextField, Button } from "@mui/material";
import NoEncryptionGmailerrorredOutlinedIcon from "@mui/icons-material/NoEncryptionGmailerrorredOutlined";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate()
  const paperStyle = {
    padding: 18,
    height: "50vh",
    width: 300,
    margin: "3cm auto ",
  };
  const avatarStyle = {
    backgroundColor: "red",
  };

  const handleSendOTP = async () => {
    if (phoneNumber) {
      const data = {
        mobile_number: phoneNumber
      }
      try {
        const response = await axios.post('https://storebh.bhaaraterp.com/api/login/', data)
        console.log(response, "::::resp");
        if (response.status === 200) {
          console.log('OTP sent successfully!');
          navigate("/verifyotp")
        } else {
          console.error('Failed to send OTP');
        }
      } catch (error) {
        console.error('Error sending OTP:', error);
      }
    }
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
            placeholder="enter the number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <br />
          <br />
          <Button variant="contained" endIcon={<SendIcon />} onClick={handleSendOTP}>
            Send OTP
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
