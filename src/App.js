import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useError from 'use-error-boundary';

import DrinksProvider from './contexts/DrinkContext';
import MeatsProvider from './contexts/MeatContext';
import UsersProvider from './contexts/UserContext';

import HomeDrinks from './pages/HomeDrinks';
import HomeMeals from './pages/HomeMeals';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProgressDrinks from './pages/ProgressDrinks';
import ProgressMeals from './pages/ProgressMeals';
import DetailsDrinks from './pages/DetailsDrinks';
import DetailsMeals from './pages/DetailsMeals';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Explore from './pages/Explore';
import NotFound from './pages/NotFound';
import ExploreAreaMeals from './pages/ExploreAreaMeals';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreMeals from './pages/ExploreMeals';
import ExploreIngredientsDrinks from './pages/ExploreIngredientsDrinks';
import ExploreIngredientsMeals from './pages/ExploreIngredientsMeals';

const App = () => {
  const { ErrorBoundary, didCatch, error } = useError();
  return (
    <BrowserRouter>
      <Switch>
        {didCatch ? (
          <p>Ocorreu um erro: {error.message}</p>
        ) : (
          <ErrorBoundary>
            <UsersProvider>
              <Route path="/" exact component={Login} />
              <Route path="/perfil" exact component={Profile} />
              <Route path="/receitas-feitas" exact component={DoneRecipes} />
              <Route
                path="/receitas-favoritas"
                exact
                component={FavoriteRecipes}
              />
              <Route path="/explorar" exact component={Explore} />
              <MeatsProvider>
                <Route path="/comidas" exact component={HomeMeals} />
                <Route path="/comidas/:id" exact component={DetailsMeals} />
                <Route
                  path="/comidas/:id/in-progress"
                  exact
                  component={ProgressMeals}
                />
                <Route
                  path="/explorar/comidas"
                  exact
                  component={ExploreMeals}
                />
                <Route
                  path="/explorar/comidas/ingredientes"
                  exact
                  component={ExploreIngredientsMeals}
                />
                <Route
                  path="/explorar/comidas/area"
                  exact
                  component={ExploreAreaMeals}
                />
              </MeatsProvider>
              <DrinksProvider>
                <Route path="/bebidas" exact component={HomeDrinks} />
                <Route path="/bebidas/:id" exact component={DetailsDrinks} />
                <Route
                  path="/bebidas/:id/in-progress"
                  exact
                  component={ProgressDrinks}
                />
                <Route
                  path="/explorar/bebidas"
                  exact
                  component={ExploreDrinks}
                />
                <Route
                  path="/explorar/bebidas/ingredientes"
                  exact
                  component={ExploreIngredientsDrinks}
                />
              </DrinksProvider>
              <Route path="/explorar/bebidas/area" component={NotFound} exact />
            </UsersProvider>
          </ErrorBoundary>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
