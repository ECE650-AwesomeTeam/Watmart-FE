import React from 'react';
import { Route, Switch } from "react-router-dom";

const Routes: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={Listings} />
            </Switch>
        </React.Fragment>
    );
};

export default Routes;