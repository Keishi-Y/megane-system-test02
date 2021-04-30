import React from "react";
import "./App.css";

import { useAuth0 } from "@auth0/auth0-react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
// import { createBrowserHistory } from "history";
import ClinicCharts from "./pages/ClinicCharts";
import FrameInfo from "./pages/FrameInfo";
import { Layout } from "./components/layout/Layout";
import AppInfo from "./pages/AppInfo";
import AccountInfo from "./pages/AccountInfo";
import Setting from "./pages/Setting";
import CreateClinicCharts from "./pages/CreateClinicCharts";
import CreateFrameInfo from "./pages/CreateFrameInfo";
import MyPage from "./pages/MyPage";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <p></p>;
  }

  return (
    <Router>
      <Layout>
        <Switch>
          {isAuthenticated ? (
            <Route path="/mypage" exact component={MyPage} />
          ) : (
            <Route path="/" exact component={Home} />
          )}
          <ProtectedRoute path="/clinic-charts" component={ClinicCharts} />
          <ProtectedRoute
            path="/create-clinic-charts"
            exact
            component={CreateClinicCharts}
          />
          <ProtectedRoute path="/frame-info" component={FrameInfo} />
          <ProtectedRoute
            path="/create-frame-info"
            exact
            component={CreateFrameInfo}
          />
          <ProtectedRoute path="/account-info" exact component={AccountInfo} />
          <Route path="/app-info" exact component={AppInfo} />
          <Route path="/setting" exact component={Setting} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
