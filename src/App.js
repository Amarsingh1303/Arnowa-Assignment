import "./App.css";
import BarChart from "./components/task4/BarChart";
import SignUpForm from "./components/task1and2/SignUpForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/task1and2/Home";
import PieContainer from "./components/task3/PieContainer";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/task1" exact component={SignUpForm} />
        <Route path="/task1/home" component={Home} />
        <Route path="/task3" component={PieContainer} />
        <Route path="/task4" component={BarChart} />
      </Switch>
    </Router>
  );
}

export default App;
