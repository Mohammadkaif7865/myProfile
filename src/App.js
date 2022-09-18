import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Component/Home";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
           <Route exact path="/" > <Home/> </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
