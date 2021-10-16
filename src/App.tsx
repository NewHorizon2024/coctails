import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import GridLayout from "./layouts/Grid";
//alert
import { UserAlert } from "./Alert/Alert";
// redux
import { coctailAction } from "./store/coctailSlice";
import { useSelector, useDispatch } from "react-redux";
import { coctailStateActions } from "./store/coctailState";
// types
import { RootState, AppDispatch } from "./store/coctailStore";

const connectivity = window.navigator.onLine;
const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const coctailsState = useSelector<RootState, []>(
    (state) => state.coca.coctails
  );
  const netWork = useSelector<RootState>((state) => state.cocaState.isNetwork);

  useEffect(() => {
    dispatch(coctailStateActions.coctailLoading());
    dispatch(coctailStateActions.networkState("active"));
    window
      .fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("failed");
        }
      })
      .then((coctails) => {
        dispatch(coctailAction.storeCoctails(coctails["drinks"]));
      })
      .then(() => dispatch(coctailStateActions.coctailLoaded()))
      .catch((err) => dispatch(coctailStateActions.networkState("inactive")));
  }, []);

  return (
    <div>
      {!netWork || !connectivity ? <UserAlert /> : null}

      <Header />
      <GridLayout coctails={coctailsState} />
    </div>
  );
};

export default App;
