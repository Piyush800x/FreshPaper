import './App.css';
import HomePage from './pages/HomePage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
        <Route exact path='/' component={HomePage}/>
        <Route path='/data' component={SearchPage}/>
      </Router>
    </div>
  );
}

export default App;
