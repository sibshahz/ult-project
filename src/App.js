import React,{lazy, Suspense} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';
import {Routes,Route,Link,Redirect, Navigate,BrowserRouter as Router} from "react-router-dom";
import DashboardPage from './pages/dashboard/dashboard.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import HeaderComponent from './components/header/header.component';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUserId } from './redux/user/user.actions';
import {auth}  from './firebase/firebase';
import RequireAuth from './components/require-auth/require-auth.component';
import Navigation from './components/navigation/navigation.component';
import { Loader } from '@mantine/core';


import { AppShell, Navbar, Header } from '@mantine/core';
import Tasks from './components/tasks-component/tasks.component';
import ProjectTasksDirectory  from './components/project-tasks/project-tasks-directory.component';
import { TeamsPage } from './pages/teams/teams.component';
const LandingPage = lazy(() => import('./pages/landing/landing-page.component'));



class App extends React.Component{
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser} = this.props;
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
       

        <AppShell
          padding="md"
          navbar={<Navbar width={{ base: 250 }} height="100%" p="xs" open={false}><Navigation /></Navbar>}
          header={<Header height={60} p="xs" ><HeaderComponent /></Header>}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >
          <div className='main-content'>
          <Routes>
                <Route path='/' element={
                <Suspense fallback={<Loader sx={{ position:'absolute',width:"10%",height:"10%",top:"45%",left:"45%" }} />}>
                    <LandingPage />
                </Suspense>
                } />
                <Route exact path='/sign-in' element={<SignInPage />} />
                <Route exact path='/sign-up' element={<SignUpPage />} />
                <Route exact path='/tasks' element={
                <RequireAuth navigateTo="/sign-in"><Tasks /></RequireAuth>
                } />
                <Route exact path='/teams' element={
                <RequireAuth navigateTo="/sign-in"><TeamsPage /></RequireAuth>
                }
                 />
                <Route exact 
                    path="/dashboard"
                    element={
                    <RequireAuth navigateTo="/sign-in">
                      <DashboardPage />
                    </RequireAuth>
                    }
                />
                <Route exact 
                    path="/dashboard/project/"
                    element={
                    <RequireAuth navigateTo="/sign-in">
                      <ProjectTasksDirectory />
                      </RequireAuth>
                    }
                />
            
              </Routes>
            </div>
        </AppShell> 
         
      </div>
      );
    }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
