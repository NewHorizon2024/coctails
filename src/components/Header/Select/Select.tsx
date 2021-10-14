import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const SelectBar = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "fit-content",
  display: "flex",
}));

const SelectAndSearch: React.FC = () => {
  const [letters, setLetters] = useState<string[]>([]);
  const [selEvent, setSelEvent] = useState<string>("");

  useEffect(() => {
    let arr = [];
    for (let i = 65; i <= 90; i++) {
      arr.push(String.fromCharCode(i));
    }
    setLetters(arr);
  }, []);

  const changeHandler = (event: SelectChangeEvent) => {
    event.preventDefault();
    setSelEvent(event.target.value);
  };

  return (
    <SelectBar>
      <FormControl sx={{ width: "100px" }}>
        <InputLabel id="demo-simple-select-label">A-Z</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selEvent}
          label="Age"
          onChange={changeHandler}
        >
          {letters.map((letter, index) => {
            return (
              <MenuItem key={index.toString()} value={letter}>
                {letter}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </SelectBar>
  );
};
export default SelectAndSearch;
