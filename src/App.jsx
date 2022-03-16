import React from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import classes from './App.module.css';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import ProfileContainer from './components/Profile/Profile-container';
import MessangerContainer from './components/Messanger/Messanger-container';
import FriendsContainer from './components/Friends/Friends-container';


const App = (props) => {

  return (
    
    
        <div className={classes.appWrapper}>
          
          <Header />
          <Navbar />
          <div className={classes.content}>
              <Route path='/profile' render={() => <ProfileContainer/>}/>
              <Route path='/messanger' render={() => <MessangerContainer/>}/>
              <Route path='/music' component={Music}/>
              <Route path='/news' component={News}/>
              <Route path='/settings' component={Settings}/>
              <Route path='/friends' render={() => <FriendsContainer/>}/>
          </div>
        </div>
    
  );
}


export default App;
