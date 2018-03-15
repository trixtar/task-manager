import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default class Task extends Component {
    static propTypes = {
        task: PropTypes.object.isRequired,
        completeTask: PropTypes.func.isRequired,
    }

    handleCompleteTask = () => {
        this.props.completeTask(this.props.task.id);
    }

    render() {
        const {title, completed, id} = this.props.task;
        console.log('Task', this.props.task);

        return (
            <li className={styles.root}>
                <span>{title}</span>
                {!completed && <span onClick={this.handleCompleteTask}>X</span>}
            </li>
        );
    };
};
