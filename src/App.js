import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
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
        <Provider store={store}>
          <Router>
            <Header />
            <Layout>
              <ScrollToTop />
              <Route exact path="/" component={Balance} />
              <Route path="/transaction/:id" component={RecordDetail} />
              <Switch></Switch>
            </Layout>
          </Router>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
