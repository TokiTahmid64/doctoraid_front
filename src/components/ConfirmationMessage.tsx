import React from "react";
import { Typography } from "@mui/material";

interface ConfirmationMessageProps {
  status: string;
}

const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({ status }) => {
  return <Typography variant="body1" color={status === "Login successful!" ? "primary" : "error"}>{status}</Typography>;
};

export default ConfirmationMessage;
