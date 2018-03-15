import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTask} from '../../actions/index';
import Task from '../task/index';
import styles from './styles.css';

// de donde sale el state con los tasks posta?
const mapStateToProps = state => ({
    tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
    completeTask: id => dispatch(completeTask(id)),
});

class TaskList extends Component {
    render() {
        return (
            <ul className={styles.list}>
                {this.props.tasks.map(task => (
                    <Task task={task} key={task.id} completeTask={this.props.completeTask} />
                ))}
            </ul>
        );
    }
}

const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default ConnectedTaskList;
