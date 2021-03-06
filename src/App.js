import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewBlog from './components/NewBlog';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/Notfound';
function App() {

  return (
    <Router>
       <div className="App">
      <Navbar/>
      <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/NewBlog">
               <NewBlog/>
            </Route>

            <Route path="/blogs/:id">
               <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
        </Switch>
      </div>
      
    </div>
   </Router>
  );
}

export default App;
