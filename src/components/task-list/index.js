import React from 'react';
import {connect} from 'react-redux';
import Task from '../task/index';
import styles from './styles.css';

// de donde sale el state con los tasks posta?
const mapStateToProps = state => {
    return {tasks: state.tasks}
};

const connectedTaskList = ({tasks}) => (
    <ul className={styles.list}>
        {tasks.map(task => (
            <Task task={task} key={task.id} />
        ))}
    </ul>
);

const TaskList = connect(mapStateToProps)(connectedTaskList);

export default TaskList;
