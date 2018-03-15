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

class TaskForm extends Component {
    state = {
        title: '',
    }

    handleInput = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {title} = this.state;
        const id = uuidv1();
        this.props.addTask({title, id});
        this.setState({title: ''});
    }

    render() {
        const {title} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label className={styles.formGroup}>
                    <span>Tarea: </span>
                    <input
                        type='text'
                        className={styles.formInput}
                        placeholder='Escriba su tarea aquí'
                        id='title'
                        value={title}
                        onChange={this.handleInput} />
                </label>
                <button type='submit' className={styles.submit}>
                    Guardar
                </button>
            </form>
        );
    }
};

const ConnectedTaskForm = connect(null, mapDispatchToProps)(TaskForm);

export default TaskForm;
