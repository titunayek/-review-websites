import Home from './component/Home/Home';
import './App.css';
import Friends from './component/Friends/Friends';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './component/Header/Header';
import FriendDatels from './component/FriendDatels/FriendDetels';
import Culture from './component/Culture/Culture';
import FriendDetels from './component/FriendDatels/FriendDetels';
import Posts from './component/Poperty/Poperty';
import PopertyDetels from './component/PopertyDetels/PopertyDetels';


function App() {

  return (
   
    <div className="App">
  
     <Router>
     <Header></Header>

     <Switch>
        <Route exact path ='/'>
            <Home></Home>
        </Route>
        <Route path='/home'>
            <Home></Home>
        </Route>
        <Route path='/posts'>
          <Posts></Posts>
        </Route>
          <Route path='/friends'>
             <Friends></Friends>
          </Route>
          <Route path='/friend/:friendId'>
            <FriendDetels></FriendDetels>
          </Route>
          <Route path='/post/:postId'>
          <PopertyDetels></PopertyDetels>
          </Route>
          <Route exact path='/about'>
             <About></About>
          </Route>
          <Route exact path='/about/culture'>
            <Culture></Culture>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>

     </Switch>
     </Router>
    </div>
  );
}

export default App;
