import React from "react";
import ReactDOM from "react-dom";
import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
//redux
import { useDispatch } from "react-redux";
import { appStateActions } from "../../store/appState";
import { AppDispatch } from "../../store/coctailStore";
//router
import { useHistory } from "react-router-dom";

const SigHeader = styled(Paper)(() => ({
  width: "100vw",
  height: "80px",
  boxSizing: "border-box",
  paddingLeft: "50px",
  paddingRight: "50px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#fff",
  zIndex: 3,
  marginBottom: "10px",
}));

const Typo = styled(Typography)(() => ({
  fontFamily: "Alatsi",
  userSelect: "none",
  cursor: "pointer",
  color: "#212121",
  width: "auto",
}));

const Head: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const history = useHistory();
  const clickHandler = () => {
    history.push("/");
    window.sessionStorage.setItem("gurd", "0");
    dispatch(appStateActions.main());
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
