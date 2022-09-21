import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Offcanvas from "./Offcanvas";
import Home from "./Component/Home";
import './App.css';

function App() {
  let [showOff, setShowOff] = useState("none");
  return (
    <>
      <BrowserRouter>
        <Header changeShow={(data) => setShowOff(data)} />
        <Offcanvas showOff={showOff} changeShow={(data) => setShowOff(data)} />
        <Switch>
          <Route exact path="/" > <Home changeShow={(data) => setShowOff(data)} /> </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
