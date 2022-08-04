import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';
import {Routes,Route,Link, Navigate} from "react-router-dom";
import DashboardPage from './pages/dashboard/dashboard.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import Header from './components/header/header.component';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUserId } from './redux/user/user.actions';
import {auth}  from './firebase/firebase';
import RequireAuth from './components/require-auth/require-auth.component';



class App extends React.Component{
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser,setCurrentUserId } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth!==null) {
          let user={
            id: userAuth.uid,
            name:userAuth.displayName,
            email:userAuth.email
          };
            setCurrentUser(
              user
            );
            setCurrentUserId(user.id);
        
      }else{
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <header className="App-header top-bar">
          <Header />
        </header> 
        <div className='main-content'>
          <Routes>
            {/* <Route path='/' element={<SignInPage />} /> */}
            <Route path='/sign-in' element={<SignInPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route
                path="/dashboard"
                element={
                <RequireAuth navigateTo="/sign-in">
                  <DashboardPage />
                </RequireAuth>
                }
            />
          </Routes>
        </div> 
      </div>
      );
    }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setCurrentUserId: userId => dispatch(setCurrentUserId(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
