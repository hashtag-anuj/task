import { useState } from "react";
import { Avatar, Grid, Paper, TextField, Button } from "@mui/material";
import NoEncryptionGmailerrorredOutlinedIcon from "@mui/icons-material/NoEncryptionGmailerrorredOutlined";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const Otp = () => {
     const [otp, setOtp] = useState('');
     const [phoneNumber, setPhoneNumber] = useState('');

     const paperStyle = {
          padding: 18,
          height: "50vh",
          width: 300,
          margin: "3cm auto ",
     };
     const avatarStyle = {
          backgroundColor: "red",
     };

     const verifyOTP = async () => {
          if (otp) {
               const data = {
                    mobile_otp: otp,
                    mobile_number: phoneNumber,
                    type: "web",
                    registration_token: "",
               }
               try {
                    const response = await axios.post('https://storebh.bhaaraterp.com/api/verify-login-otp/', data)
                    if (response.status === 200) {
                         console.log('OTP sent successfully!');
                    } else {
                         console.error('Failed to send OTP');
                    }
               } catch (error) {
                    console.error('Error sending OTP:', error);
               }
          }
     };
     return (
          <div className="Otp">
               <Grid align="center">
                    <Paper elevation={15} style={paperStyle}>
                         <Avatar style={avatarStyle}>
                              <NoEncryptionGmailerrorredOutlinedIcon />
                         </Avatar>
                         <h1>Mobile Number Verification</h1>
                         <TextField
                              id="standard-basic"
                              label="OTP"
                              variant="standard"
                              placeholder="enter the OTP"
                              required
                              onChange={(e) => setOtp(e.target.value)}
                         />
                         <br /> <br /> <br />
                         <Button variant="contained" endIcon={<SendIcon />} onClick={verifyOTP} >
                              Verify OTP
                         </Button>
                    </Paper>
               </Grid>
          </div>
     );
};

export default Otp;
