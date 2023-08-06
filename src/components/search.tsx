import React, { useState } from "react";
import axios from "axios";
import { AppBar, Toolbar, Typography, Container, Grid, Paper, TextField, Button } from "@mui/material";
import SearchResultCard from "./SearchResultCard";

const Search: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [searchResult, setSearchResult] = useState<{
    message: string;
    user: {
      id: number;
      name: string;
      email: string;
      phoneNumber: string;
    };
  } | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("/search", { id, phoneNumber });
      // Assuming the API response contains the search result data
      if (response.status === 200 && response.data.user) {
        setSearchResult(response.data);
      } else {
        setSearchResult(null); // Reset search result to null if no user found
      }
      console.log("response", response.data);
    } catch (error) {
      console.error("Error searching:", error);
      setSearchResult(null); // Reset search result to null in case of error
    }
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
              <Typography variant="h5">Search Patient</Typography>
              {/* Add any content you want for the left panel */}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            {searchResult ? (
              <SearchResultCard data={searchResult} />
            ) : (
              <Paper elevation={3} style={{ padding: "20px" }}>
                <form onSubmit={handleFormSubmit}>
                  <TextField
                    type="text"
                    label="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    fullWidth
                    required
                  />
                  <br />
                  <TextField
                    type="text"
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    fullWidth
                    required
                  />
                  <br />
                  <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
                    Search
                  </Button>
                </form>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Search;
