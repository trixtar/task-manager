import React, {Component} from 'react';
import TaskForm from '../../components/task-form';
import TaskList from '../../components/task-list';

export default class Home extends Component {
    state={
        tasks: [],
    }

    render() {
        return (
            <main>
                <TaskForm />
                <TaskList />
            </main>
        );
    };
};
