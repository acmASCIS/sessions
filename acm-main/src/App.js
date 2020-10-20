import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import{ BrowserRouter,Route} from 'react-router-dom';
import Home from './home';
import About from './about';
import Test from './Test';
import TestTwo from './TestTwo';
class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      counter:0
    }

  }
  change=()=> this.setState({counter:++this.state.counter})
  render(){
  return (
    <BrowserRouter>
    <div>
    <Nav/>
      <Route exact path="/" component={Home}/>
      <Route path="/About" component={About}/>

      <button onClick={this.change}>count</button>
      {this.state.counter}

      <TestTwo name="hello acmacicas by props"/>
      
      //NESTED COMPONENT
      <Test />
      
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
