import React from "react";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";

const Profile = () => {
  return (
    <div className="Profile">
      <Typography gutterBottom variant="h3" align="center">
        Profile
      </Typography>
      <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Us
          </Typography>

          <form>
            <Grid container spacing={1}></Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="First Name"
                placeholder="Enter first name"
                required
                fullWidth
              />
            </Grid>
            <br />
            <Grid xs={12} sm={6} item>
              <TextField
                label="Last Name"
                placeholder="Enter last name"
                required
                fullWidth
              />
            </Grid>
            <br />
            <Grid xs={12} item>
              <TextField
                type="email"
                label="Email"
                placeholder="Enter email"
                required
                fullWidth
              />
            </Grid>
            <br />
            <Grid xs={12} item>
              <TextField
                label="Gender"
                placeholder="Enter gender"
                required
                fullWidth
              />
            </Grid>
            <br />
            <Grid xs={12} item>
              <TextField
                label="DOB"
                placeholder="Enter deth of birth"
                required
                fullWidth
              />
            </Grid>
            <br />
            <Grid xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Submit
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
