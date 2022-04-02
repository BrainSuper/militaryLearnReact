import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
  return (
      <BrowserRouter>
    <div className="App">
        <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-content'>
            <Route path={'/profile'} component={Profile}/>
            <Route exact path={'/dialogs'} component={Dialogs}/>
            {/*<Profile/>*/}
            {/*<Dialogs/>*/}
        </div>



        </div>

    </div>
      </BrowserRouter>
  );
}

export default App;
