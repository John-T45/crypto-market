import React from "react";
import { Router } from "@reach/router";
import HomePage from '../pages/Home';
import HistoryPage from '../pages/History';

const AppRoutes = () => {
    return (
        <Router>
            <HomePage path="/" />
            <HistoryPage path="/history/:currencyPair"/>
        </Router>
    )
};

export default AppRoutes;
