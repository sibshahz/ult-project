import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import SignInSignUp from './pages/sign-in/sign-in-sign-up.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to Ultimate Project!</h1>
      <p>Create and manage projects, tasks and teams easily.</p>
      </header> 
      <SignInSignUp />
        <Routes>
          <Route exact path='/sign-in' element={<SignIn />} />
          <Route exact path='/sign-up' element={<SignUp />} />
        </Routes>
    </div>
  );
}

export default App;
