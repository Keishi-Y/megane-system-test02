import React from "react";
import "./App.css";

import { useAuth0 } from "@auth0/auth0-react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import ClinicRecords from "./pages/ClinicRecords";
import { Layout } from "./components/layout/Layout";
import AppInfo from "./pages/AppInfo";
import AccountInfo from "./pages/AccountInfo";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <p></p>;
  }
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/clinic-records" component={ClinicRecords} />
          <ProtectedRoute path="/account-info" exact component={AccountInfo} />
          <Route path="/app-info" exact component={AppInfo} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
