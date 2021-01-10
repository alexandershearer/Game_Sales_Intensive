import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/HomePage/home';
import MainDeals from './Components/HomePage/Components/MainDeals/deals';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <Route path="/store/:id" render={(props) => (
          <MainDeals key={props.match.params.id} id={props.match.params.id} />)} />
      </div>
    </Router>
  );
}

export default App;
