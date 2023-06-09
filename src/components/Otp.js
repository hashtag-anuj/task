import { useState } from "react";
import { Avatar, Grid, Paper, TextField, Button } from "@mui/material";
import NoEncryptionGmailerrorredOutlinedIcon from "@mui/icons-material/NoEncryptionGmailerrorredOutlined";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useParams } from "react-router";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const { no } = useParams();
  // const [phoneNumber, setPhoneNumber] = useState('');
  console.log(no, "::::phone");
  const paperStyle = {
    padding: 18,
    height: "50vh",
    width: 300,
    margin: "3cm auto "
  };
  const avatarStyle = {
    backgroundColor: "red"
  };

  const verifyOTP = async () => {
    if (otp) {
      const data = {
        mobile_otp: otp,
        mobile_number: no,
        type: "web",
        registration_token: ""
      };
      try {
        const response = await axios.post(
          "https://storebh.bhaaraterp.com/api/verify-login-otp/",
          data
        );
        if (response.status === 200) {
          localStorage.setItem("otp", response.data.token);
        } else {
          console.error("Failed to verify OTP");
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
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
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={verifyOTP}
          >
            Verify OTP
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default Otp;
