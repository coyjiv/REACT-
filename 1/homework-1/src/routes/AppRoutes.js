import React from 'react';
import Route from "react-router-dom/es/Route";
import Favourites from "../Components/pages/Favourites/Favourites";
import Cart from "../Components/pages/Cart/Cart";
import Switch from "react-router-dom/es/Switch";
import Cards from "../Components/pages/Cards/Cards";

const AppRoutes = () => {
        return (
            <Switch>
                <Route exact path="/cards" ><Cards/></Route>
                <Route exact path="/favourites"><Favourites/></Route>
                <Route exact path="/cart"><Cart/></Route>
            </Switch>
        )
    }
;

export default AppRoutes;