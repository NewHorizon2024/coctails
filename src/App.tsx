import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import GridLayout from "./layouts/Grid";
// redux
import { coctailAction, Data } from "./store/coctailSlice";
import { useSelector, useDispatch } from "react-redux";
// types
import { RootState, AppDispatch } from "./store/coctailStore";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const coctailsState = useSelector<RootState, Data>((state) => state.coca);

  useEffect(() => {
    window
      .fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
      )
      .then((response) => response.json())
      .then((coctails) => {
        dispatch(coctailAction.storeCoctails(coctails["drinks"]));
      });
  }, []);

  return (
    <div>
      <Header />
      <GridLayout coctails={coctailsState.coctails} />
    </div>
  );
};

export default App;
