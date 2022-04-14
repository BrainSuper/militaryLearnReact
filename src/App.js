import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializing} from "./Redux/auth-reducer";
import Preloader from "./components/Preloader/Preloader";
import {compose} from "redux";


class App extends Component {
    componentDidMount() {
        this.props.initializing();
    }

    render() {
        if (this.props.initialized) {
            return (
                    <div className="App">
                        <div className='app-wrapper'>
                            <HeaderContainer/>
                            <Navbar/>
                            <div className='app-content'>
                                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                                <Route exact path={'/dialogs'} render={() => <DialogsContainer/>}/>
                                <Route exact path={'/users'} render={() => <UsersContainer/>}/>
                                <Route path={'/login'} render={() => <Login/>}/>
                            </div>
                        </div>
                    </div>
            )
        } else {
            return <Preloader />
        }
    }
}
const mapStateToProps = (state) => ({initialized: state.auth.initialized})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializing})
)(App);
