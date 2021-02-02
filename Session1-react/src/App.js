import { ClassComponent, FunctionComponent } from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <FunctionComponent firstName="Ahmed" secondName="Ragab" />
          </Route>

          {/*  added path to class component and did not work
          <Route path="/class">
             <ClassComponent name="class component props " />
          </Route> */}

          <Route path="/class">
            <ClassComponent name="class component props " />
          </Route>
        </Switch>
      </div>
      {/* <div className="App">
        <ClassComponent name="class component props " />
        <FunctionComponent firstName="Ahmed" secondName="Ragab" />
      </div> */}
    </Router>
  );
}

export default App;
