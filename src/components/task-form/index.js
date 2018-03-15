import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';
import {addTask} from '../../actions/index';
import styles from './styles.css';

const mapDispatchToProps = dispatch => {
    return {
        addTask: task => dispatch(addTask(task))
    };
};

class ConnectedTaskForm extends Component {
    state = {
        taskTitle: '',
    }

    handleInput = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {taskTitle} = this.state;
        const id = uuidv1();
        console.log(id);
        this.props.addTask(taskTitle, id);
        this.setState({taskTitle: ''});
    }

    render() {
        const {taskTitle} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label className={styles.formGroup}>
                    <span>Tarea: </span>
                    <input
                        type='text'
                        className={styles.formInput}
                        placeholder='Escriba su tarea aquí'
                        id='taskTitle'
                        value={taskTitle}
                        onChange={this.handleInput} />
                </label>
                <button type='submit' className={styles.submit}>
                    Guardar
                </button>
            </form>
        );
    }
};

const TaskForm = connect(null, mapDispatchToProps)(ConnectedTaskForm);

export default TaskForm;
