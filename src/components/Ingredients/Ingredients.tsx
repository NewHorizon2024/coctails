import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import IngRelated from "../RelatedIng/RelatedIng";
//redux
import { useDispatch, useSelector } from "react-redux";
import { coctailAction } from "../../store/coctailSlice";
//types [store]
import { RootState, AppDispatch } from "../../store/coctailStore";
const IngredientsLayout = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const IngredientsControl = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const IngredientsBtns = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  paddingTop: "10px",
}));

const IngredientsBody = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  height: "430px",
  overflow: "auto",
}));

const IngredientsApp: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const relatedIngs = useSelector<RootState, []>(
    (state) => state.coca.relatedIng
  );
  const [ings, setIngs] = useState<string[]>([]);
  const btn = useRef<HTMLButtonElement>(null);

  const getIngredients = () => {
    const data = window.sessionStorage.getItem("cocD");
    if (data) {
      const parseData = JSON.parse(data);
      const dataObj = parseData[0];
      let arr = [];
      let ingredients = true;
      let i = 1;
      while (ingredients) {
        if (!dataObj[`strIngredient${i}`]) {
          ingredients = false;
        } else {
          arr.push(dataObj[`strIngredient${i}`]);
          i++;
        }
      }
      setIngs(arr);
    }
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const clickHandler = (event: React.SyntheticEvent<EventTarget>) => {
    const target = event.target as HTMLButtonElement;

    if (btn.current) {
      const ingredientName = target.textContent;

      if (ingredientName) {
        window.sessionStorage.setItem("ing", ingredientName);
        window
          .fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${encodeURI(
              ingredientName
            )}`
          )
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else {
              throw new Error("failed");
            }
          })
          .then((data) => {
            dispatch(coctailAction.storeRelatedIng(data["drinks"]));
          });
      }
    }
  };

  return (
    <IngredientsLayout>
      <IngredientsControl>
        <Typography
          children="Ingredients"
          sx={{ color: "#2b2b2b", fontWeight: "bold" }}
        />
        <IngredientsBtns>
          {ings.map((ing, index) => {
            return (
              <Button
                onClick={(e: React.SyntheticEvent<EventTarget>) =>
                  clickHandler(e)
                }
                ref={btn}
                sx={{ marginRight: "5px", marginBottom: "5px" }}
                key={index.toString()}
                variant="outlined"
                children={ing}
              />
            );
          })}
        </IngredientsBtns>
      </IngredientsControl>
      <IngredientsBody>
        {relatedIngs
          ? relatedIngs.map((ing, index) => {
              return (
                <IngRelated
                  name={ing["strDrink"]}
                  src={ing["strDrinkThumb"]}
                  key={index.toString()}
                />
              );
            })
          : null}
      </IngredientsBody>
    </IngredientsLayout>
  );
};

export default IngredientsApp;
