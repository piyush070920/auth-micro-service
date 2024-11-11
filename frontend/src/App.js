import React from "react";
import "./styles.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./components/Error";
// import { Header } from "./components/Header";
import { Route} from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";



function App() {
  
  return (
    <div className="App">
      {/* <Header/> */}
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={Signup} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;