import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={Listings} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Switch>
        </React.Fragment>
    );
};

export default Routes;
