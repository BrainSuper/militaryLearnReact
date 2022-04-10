import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = (props) => {
  return (
      <BrowserRouter>
    <div className="App">
        <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-content'>
            <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
            <Route exact path={'/dialogs'} render={() => <DialogsContainer />}/>
            <Route exact path={'/users'} render={() => <UsersContainer />}/>
            <Route path={'/login'} render={() => <Login />}/>
            {/*<Profile/>*/}
            {/*<Dialogs/>*/}
        </div>



        </div>

    </div>
      </BrowserRouter>
  );
}

export default App;
