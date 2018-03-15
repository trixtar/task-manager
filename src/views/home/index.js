import React, {Component} from 'react';
import ConnectedTaskForm from '../../components/task-form';
import ConnectedTaskList from '../../components/task-list';

export default class Home extends Component {
    state={
        tasks: [],
    }

    render() {
        return (
            <main>
                <ConnectedTaskForm />
                <ConnectedTaskList />
            </main>
        );
    };
};
