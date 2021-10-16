import React from "react";
import { styled, Box, Typography, Paper } from "@mui/material";

interface InfoProps {
  id: string;
  category: string;
  alco: string;
  glass: string;
  instructions: string;
}
const CoctailDetailsContainer = styled(Box)(() => ({
  width: "inherit",
  display: "flex",
  flexDirection: "column",
}));

const Tag = styled(Typography)(() => ({
  fontWeight: "bold",
}));

const Desc = styled(Typography)(() => ({
  color: "#2b2b2b",
}));

const InfoRow = styled(Paper)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "fit-content",
  boxSizing: "border-box",
  padding: "20px",
  marginBottom: "20px",
}));

const Info: React.FC<InfoProps> = (props) => {
  return (
    <CoctailDetailsContainer>
      <InfoRow>
        <Tag>Id:</Tag>
        <Desc>{props.id}</Desc>
      </InfoRow>
      <InfoRow>
        <Tag>Category</Tag>
        <Desc>{props.category}</Desc>
      </InfoRow>
      <InfoRow>
        <Tag>Alcoholic</Tag>
        <Desc>{props.alco}</Desc>
      </InfoRow>
      <InfoRow>
        <Tag>Glass</Tag>
        <Desc>{props.glass}</Desc>
      </InfoRow>
      <InfoRow>
        <Tag>Instructions</Tag>
        <Desc>{props.instructions}</Desc>
      </InfoRow>
    </CoctailDetailsContainer>
  );
};

export default Info;
