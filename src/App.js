import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import Spinner from "./components/Spinner";
import ScrollToTop from "./components/ScrollToTop";

//Pages
const Balance = React.lazy(() => import("./pages/Balance"));
const RecordDetail = React.lazy(() => import("./pages/RecordDetail"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <GlobalStyles />
        <Layout>
          <Router>
            <ScrollToTop />
            <Route exact path="/" component={Balance} />
            <Route exact path="/transaction/:id" component={RecordDetail} />
            <Switch></Switch>
          </Router>
        </Layout>
      </Suspense>
    </div>
  );
}

export default App;
