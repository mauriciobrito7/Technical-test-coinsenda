import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
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
        <Header />
        <Layout>
          <Router>
            <ScrollToTop />
            <Route exact path="/" component={Balance} />
            <Route path="/transaction/:id" component={RecordDetail} />
            <Switch></Switch>
          </Router>
        </Layout>
      </Suspense>
    </div>
  );
}

export default App;
