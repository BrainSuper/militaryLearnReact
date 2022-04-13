import React from "react";
import styles from './Textarea.module.css';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div>
        <div className={hasError && styles.text__wrapper}>
            <textarea {...input} {...props}/>
        </div>
        {hasError && <span className={styles.error}>{meta.error}</span>}
    </div>
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div>
        <div className={hasError && styles.text__wrapper}>
            <input {...input} {...props}/>
        </div>
        {hasError && <span className={styles.error}>{meta.error}</span>}
    </div>
}
