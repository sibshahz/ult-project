import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import Header from './components/header/header.component';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import {auth}  from './firebase/firebase';


class App extends React.Component{
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
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
          <Routes>
            <Route path='/' element={<SignInPage />} />
            <Route exact path='/sign-up' element={<SignUpPage />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
          </Routes>
      </div>
      );
    }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
