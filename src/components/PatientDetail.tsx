// PatientDetail.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";

interface PatientDetailProps {
  userId: number;
}

const PatientDetail: React.FC<PatientDetailProps> = ({ userId }) => {
  const [patientData, setPatientData] = useState<any | null>(null);

  useEffect(() => {
    // Fetch patient details using the userID
    const fetchPatientData = async () => {
      try {
        const response = await axios.post("/patientdetail", { userId });
        setPatientData(response.data);
      } catch (error) {
        console.error("Error fetching patient details:", error);
        setPatientData(null);
      }
    };

    fetchPatientData();
  }, [userId]);

  return (
    <Card elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
      <CardContent>
        {patientData ? (
          <>
            <Typography variant="h6">Patient Details:</Typography>
            <Typography variant="body1">ID: {patientData.id}</Typography>
            <Typography variant="body1">Name: {patientData.name}</Typography>
            <Typography variant="body1">Email: {patientData.email}</Typography>
            <Typography variant="body1">Phone Number: {patientData.phoneNumber}</Typography>
          </>
        ) : (
          <Typography variant="body1">Loading patient details...</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default PatientDetail;
