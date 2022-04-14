import React, {useState} from "react";
import classes from './ProfileInfo.module.css';

const ProfileStatus = (props) => {
    // state = {
    //     editMode: false,
    //     status: this.props.status
    // }
    // enableEditMode = () => {
    //     this.setState({
    //         editMode: true
    //     })
    // }
    // disableEditMode = () => {
    //     this.setState({
    //         editMode: false
    //     })
    //     this.props.updateStatus(this.state.status);
    // }
    // onChangeStatus = (e) => {
    //     this.setState({
    //         status: e.currentTarget.value
    //     })
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props != prevProps) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    const enableEditMode = () => {
           setEditMode(true);
    }
    const disableEditMode = () => {
           setEditMode(false);
        props.updateStatus(status);
    }
    const onChangeStatus = (e) => {
            setStatus(e.currentTarget.value);
        }

        return <div className={classes.profile__status}>
            {editMode && <input autoFocus={true} onBlur={disableEditMode} type="text" onChange={(e) => {
                onChangeStatus(e);
            }} value={status}/>}
            {!editMode && <span onDoubleClick={enableEditMode}>{props.status}</span>}

            </div>

}

export default ProfileStatus;