import React from "react";
import ReactDOM from "react-dom";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const SigHeader = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "80px",
  boxSizing: "border-box",
  paddingLeft: "50px",
  paddingRight: "50px",
  display: "flex",
  alignItems: "center",
}));

const Typo = styled(Typography)(({ theme }) => ({
  fontFamily: "Alatsi",
  userSelect: "none",
  cursor: "pointer",
  color: "#212121",
  width: "auto",
}));

const Head: React.FC = () => {
  return (
    <SigHeader>
      <Typo variant="h5" children="Sig Drinks" />
    </SigHeader>
  );
};

const Header: React.FC = () => {
  const headRoot = document.getElementById("head") as HTMLDivElement;
  return ReactDOM.createPortal(<Head />, headRoot);
};

export default Header;
