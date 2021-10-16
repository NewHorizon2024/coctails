import React from "react";
import ReactDOM from "react-dom";
import { Box, Typography, Alert, styled } from "@mui/material";

const AlertBox = styled(Box)(() => ({
  position: "fixed",
  left: "0",
  right: "0",
  top: "0",
  margin: "auto",
  marginTop: "20px",
  zIndex: 4,
  width: "fit-content",
}));

const UserAlertRoot: React.FC = () => {
  return (
    <AlertBox>
      <Alert severity="error">
        <Typography variant="body1">
          Network error - please try again later!
        </Typography>
      </Alert>
    </AlertBox>
  );
};

export const UserAlert: React.FC = () => {
  const alertRoot = document.getElementById("alert") as HTMLDivElement;
  return ReactDOM.createPortal(<UserAlertRoot />, alertRoot);
};
