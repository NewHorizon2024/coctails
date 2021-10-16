import React from "react";
import { Skeleton, Stack } from "@mui/material";

export const Skeletons: React.FC = () => {
  return (
    <Stack spacing={1}>
      <Skeleton
        variant="rectangular"
        sx={{ width: "inherit", height: "400px" }}
      />
      <Skeleton variant="text" sx={{ width: "inherit", height: "40px" }} />
    </Stack>
  );
};
