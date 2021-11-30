
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs'
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import Header from './Components/Header/Header';


function App() {


  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/blogs" >
            <Blogs></Blogs>
          </Route>
          <Route path="/details/:projectId">
            <ProjectDetails></ProjectDetails>
          </Route>
          <Route to path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
