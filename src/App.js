import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewBlog from './components/NewBlog';
import BlogDetails from './components/BlogDetails';
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
        </Switch>
      </div>
      
    </div>
   </Router>
  );
}

export default App;
