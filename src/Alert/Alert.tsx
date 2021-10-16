import React from "react";
import ReactDOM from "react-dom";
import { Box, Typography, Alert, styled } from "@mui/material";

interface AlertProps {
  severity: "error" | "info";
  message: string;
}
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

const UserAlertRoot: React.FC<AlertProps> = (props) => {
  return (
    <AlertBox>
      <Alert severity={props.severity}>
        <Typography variant="body1">{props.message}</Typography>
      </Alert>
    </AlertBox>
  );
};

export const UserAlert: React.FC<AlertProps> = (props) => {
  const alertRoot = document.getElementById("alert") as HTMLDivElement;
  return ReactDOM.createPortal(
    <UserAlertRoot severity={props.severity} message={props.message} />,
    alertRoot
  );
};
