import React, {Component} from 'react';
import TaskForm from '../../components/task-form';

export default class Home extends Component {
    state={
        tasks: [],
    }

    render() {
        return (
            <main>
                <TaskForm />
            </main>
        );
    };
};
