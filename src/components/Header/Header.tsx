import React from "react";
import ReactDOM from "react-dom";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
//router
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const clickHandler = () => {
    history.push("/");
  };
  return (
    <SigHeader>
      <Typo variant="h5" children="Sig Drinks" onClick={clickHandler} />
    </SigHeader>
  );
};

const Header: React.FC = () => {
  const headRoot = document.getElementById("head") as HTMLDivElement;
  return ReactDOM.createPortal(<Head />, headRoot);
};

export default Header;
