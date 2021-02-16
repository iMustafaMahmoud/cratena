import PropTypes from "prop-types";
import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/scroll-top";
import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { useAuth } from './hooks/auth-hook';
import "./App.css";

// Coming Soon Page
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const Home = lazy(() => import("./pages/Home"));
const LoginRegister = lazy(() => import("./pages/LoginRegister"));
const MyAccount = lazy(() => import("./pages/MyAccount"));

const App = (props) => {

  useAuth();
  
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json"),
          ar: require("./translations/arabic.json"),
        },
      })
    );
  });

  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
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
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/home"}
                  component={Home}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/login"}
                  component={LoginRegister}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/my-account/:userId"}
                  component={MyAccount}
                />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(multilanguage(App));
