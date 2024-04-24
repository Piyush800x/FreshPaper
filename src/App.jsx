import './App.css';
import HomePage from './pages/HomePage.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SettingsPage from './pages/SettingsPage.jsx';
import SearchPage from './pages/SearchPage.jsx';

function App() {
  return (
    <div >
      <Router>
        <Route exact path='/' component={HomePage}/>
        <Route path='/data' component={SearchPage}/>
        <Route path='/settings' component={SettingsPage}/>
        {/* <Sidebar /> */}
        {/* <div>
          <SetSidebar/>
        </div>
        <div className="container mx-auto p-4">
          <AnimatedSearchInput />
        </div> */}

      </Router>
    </div>
  );
}

export default App;
