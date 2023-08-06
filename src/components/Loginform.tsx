import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Container, Grid, Paper, TextField, Button } from "@mui/material";

interface LoginFormProps {
  onFormSubmit: (formData: { username: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onFormSubmit }) => {

    


  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Encode the password to base64 before sending it to the backend
    const base64Password = btoa(formData.password);

    // Create a new object with the encoded password and username
    const formDataWithEncodedPassword = {
      ...formData,
      password: base64Password,
    };

    onFormSubmit(formDataWithEncodedPassword);
  };
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">DOCTORAID</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h5">Left Panel</Typography>
              {/* Add any content you want for the left panel */}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  label="Username"
                  fullWidth
                />
                <br />
                <TextField
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  label="Password"
                  fullWidth
                />
                <br />
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
                  Submit
                </Button>
                
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LoginForm;
