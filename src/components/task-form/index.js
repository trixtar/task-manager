import React, {Component} from 'react';

export default class TaskForm extends Component {
    state={
        task: '',
    }

    handleInput = (event) => {
        this.setState({task: event.target.value});
    }

    render() {
        console.log(this.state.task);
        return (
            <label>
                <input
                    type='text'
                    placeholder='Escriba su tarea aquí'
                    value={this.state.task}
                    onChange={this.handleInput} />
            </label>
        );
    }
};
