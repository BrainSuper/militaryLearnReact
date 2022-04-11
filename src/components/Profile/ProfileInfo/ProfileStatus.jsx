import React from "react";
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status);
    }
    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return <div className={classes.profile__status}>
            {this.state.editMode && <input autoFocus={true} onBlur={this.disableEditMode} type="text" onChange={(e) => {
                this.onChangeStatus(e);
            }} value={this.state.status}/>}
            {!this.state.editMode && <span onDoubleClick={this.enableEditMode}>{this.props.status}</span>}

            </div>

    }
}

export default ProfileStatus;