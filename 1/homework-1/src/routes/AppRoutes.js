import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Favourites from "../Components/pages/Favourites/Favourites";
import Cart from "../Components/pages/Cart/Cart";
import Cards from "../Components/pages/Cards/Cards";
import { useHistory } from 'react-router'


const AppRoutes = () => {
    const history = useHistory();
    return(<Switch>
            <Redirect exact from="/" to="/cards"/>
            <Route exact path="/cards">
                <Cards/>
            </Route>
            <Route exact path="/favourites">
                <Favourites/>
            </Route>
            <Route exact path="/cart">
                <Cart/>
            </Route>
        </Switch>
    );
}


export default AppRoutes;