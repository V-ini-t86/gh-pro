import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import InfoForm from "./components/MainForm/InfoForm";
import Setting from "./components/Setting/Setting";
import CurrentProject from "./components/CurrentProject/CurrentProject";
import PreviousProject from "./components/PreviousProject/PreviousProject";
import FutureProject from "./components/FutureProject/FutureProject";
import StartProject from "./components/StartProject/StartProject";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/settings">
          <Setting />
        </Route>
        <Route path="/price">
          <Pricing />
        </Route>
        <Route path="/current">
          <CurrentProject />
        </Route>
        <Route path="/start">
          <StartProject />
        </Route>
        <Route path="/previous">
          <PreviousProject />
        </Route>
        <Route path="/future">
          <FutureProject />
        </Route>
        <Route path="/company">
          <InfoForm />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
