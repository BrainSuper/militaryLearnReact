import React from "react";
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    enableEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    disableEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    render() {
        return <div className={classes.profile__status}>
            {this.state.editMode && <input autoFocus={true} onBlur={this.disableEditMode} type="text" value={this.props.status}/>}
            {!this.state.editMode && <span onDoubleClick={this.enableEditMode}>{this.props.status}</span>}

            </div>

    }
}

export default ProfileStatus;