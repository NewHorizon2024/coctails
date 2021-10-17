import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/coctailStore";
import { coctailAction } from "../../../store/coctailSlice";
import { coctailStateActions } from "../../../store/coctailState";
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
  const logoClicked = useSelector<RootState, boolean>(
    (state) => state.appToggle.toggle
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    let arr = [];
    for (let i = 65; i <= 90; i++) {
      arr.push(String.fromCharCode(i));
    }
    setLetters(arr);
  }, []);

  useEffect(() => setSelEvent(""), [logoClicked]);

  const changeHandler = (event: SelectChangeEvent) => {
    event.preventDefault();
    const value = event.target.value;
    setSelEvent(value);
    dispatch(coctailStateActions.coctailLoading());
    dispatch(coctailStateActions.networkState("active"));
    window
      .fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`
      )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("failed");
        }
      })
      .then((data) => dispatch(coctailAction.storeCoctails(data["drinks"])))
      .then(() => dispatch(coctailStateActions.coctailLoaded()))

      .catch((err) => dispatch(coctailStateActions.networkState("inactive")));
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
