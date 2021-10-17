import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import GridLayout from "./layouts/Grid";
import Details from "./components/Details/Details";
//alert
import { UserAlert } from "./Alert/Alert";
// redux
import { coctailAction } from "./store/coctailSlice";
import { useSelector, useDispatch } from "react-redux";
import { coctailStateActions } from "./store/coctailState";
// types
import { RootState, AppDispatch } from "./store/coctailStore";
//react router
import { Route, Switch } from "react-router-dom";

const connectivity = window.navigator.onLine;

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const coctailsState = useSelector<RootState, []>(
    (state) => state.coca.coctails
  );
  const netWork = useSelector<RootState, boolean>(
    (state) => state.cocaState.isNetwork
  );
  const products = useSelector<RootState, boolean>(
    (state) => state.cocaState.thereIscoctails
  );

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
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          {!netWork || !connectivity ? (
            <UserAlert
              severity="error"
              message="Network error - please try again later!"
            />
          ) : null}
          {!products && (
            <UserAlert
              severity="info"
              message="There is no coctails at this moment!"
            />
          )}

          <Header />
          <GridLayout coctails={coctailsState} />
        </Route>
        <Route path="/details">
          <Header />
          <Details />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
