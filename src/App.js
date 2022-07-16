import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to Ultimate Project!</h1>
      <p>Create and manage projects, tasks and teams easily.</p>
      </header> 
        <Routes>
          <Route exact path='/sign-in' element={<SignInPage />} />
          <Route exact path='/sign-up' element={<SignUpPage />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
    </div>
  );
}

export default App;
