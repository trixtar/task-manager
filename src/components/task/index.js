import React from 'react';
import PropTypes from 'prop-types';
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

Task.propTypes = {
    task: PropTypes.object.isRequired,
}

export default Task;
