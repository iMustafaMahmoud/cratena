import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Coming Soon Page
const ComingSoon = lazy(() => import("./pages/ComingSoon"));

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="">
            <div className="">
              <span></span>
              <span></span>
            </div>
          </div>
        }
      >
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={ComingSoon}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
