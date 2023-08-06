// SearchResultCard.tsx
import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import PatientDetail from "./PatientDetail";

interface SearchResultCardProps {
  data: {
    message: string;
    user: {
      id: number;
      name: string;
      email: string;
      phoneNumber: string;
    };
  };
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ data }) => {
  const [showPatientDetail, setShowPatientDetail] = useState(false);

  const handleViewMoreClick = () => {
    setShowPatientDetail(true);
  };

  return (
    <Card elevation={3} style={{ padding: "20px" }}>
      <CardContent>
        <Typography variant="h6">Search Result:</Typography>
        <Typography variant="body1">ID: {data.user.id}</Typography>
        <Typography variant="body1">Name: {data.user.name}</Typography>
        <Typography variant="body1">Email: {data.user.email}</Typography>
        <Typography variant="body1">Phone Number: {data.user.phoneNumber}</Typography>
        {showPatientDetail && <PatientDetail userId={data.user.id} />}
        {!showPatientDetail && (
          <Button onClick={handleViewMoreClick} variant="contained" color="primary" style={{ marginTop: "20px" }}>
            View More
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchResultCard;
