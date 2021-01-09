import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/HomePage/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
