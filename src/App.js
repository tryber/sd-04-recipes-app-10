import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DrinksProvider from './contexts/DrinkContext';
import MeatsProvider from './contexts/MeatContext';
import UsersProvider from './contexts/UserContext';
import {getAllMeals} from './services/api'
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Progress from './pages/Progress';
import Details from './pages/Details';
import DoneAndFavRecipes from './pages/DoneAndFavRecipes';
import Explore from './pages/Explore';
import ExploreArea from './pages/ExploreArea';
import ExploreIndex from './pages/ExploreIndex';
import ExploreIngredients from './pages/ExploreIngredients';

function App() {
getAllMeals().then(value => console.log(value))
  return (
    <BrowserRouter>
      <Switch>
        <UsersProvider>
          <Route path="/" exact component={Login} />
          <Route path="/perfil" exact component={Profile} />
          <Route path="/receitas-feitas" exact component={DoneAndFavRecipes} />
          <Route path="/receitas-favoritas" exact component={DoneAndFavRecipes} />
          <Route path="/explorar" exact component={ExploreIndex} />
          <MeatsProvider>
            <Route path="/comidas" exact component={Home} />
            <Route path="/comidas/:id" exact component={Details} />
            <Route path="/comidas/:id/in-progress" exact component={Progress} />
            <Route path="/explorar/comidas" exact component={Explore} />
            <Route path="/explorar/comidas/ingredientes" exact component={ExploreIngredients} />
            <Route path="/explorar/comidas/area" exact component={ExploreArea} />
          </MeatsProvider>
          <DrinksProvider>
            <Route path="/bebidas" exact component={Home} />
            <Route path="/bebidas/:id" exact component={Details} />
            <Route path="/bebidas/:id/in-progress" exact component={Progress} />
            <Route path="/explorar/bebidas" exact component={Explore} />
            <Route path="/explorar/bebidas/ingredientes" exact component={ExploreArea} />
          </DrinksProvider>
        </UsersProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
