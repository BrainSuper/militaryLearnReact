import React from "react";
import classes from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return (
            <div className={classes.profile__info}>
                <img className={classes.profile__img}
                     src="data:image/png;base64,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"
                     alt=""/><img/>
                <div className={classes.profile__descr}>
                    <div className={classes.profile__name}>Niko</div>
                    <div>Date of birth: December 19</div>
                    <div>City: Rivne</div>
                    <div>Education: KPI</div>
                    <div>Web site: nikodev.com</div>
                    <div></div>
                </div>
            </div>
    )
}
export default ProfileInfo;