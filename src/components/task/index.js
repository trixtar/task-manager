import React from 'react';
import styles from './styles.css';

const Task = ({task}) => {
    console.log(task);
    return (
        <li className={styles.root}>
            <span>{task.title}</span>
            <span>X</span>
        </li>
    );
};

export default Task;
