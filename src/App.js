
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Layout from "./layout";


function App() {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="*">
        <Layout>
          <NotFound />
        </Layout>
      </Route>
    </Switch>
  </Router>
}

export default App;
