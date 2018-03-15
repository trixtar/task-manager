import {ADD_TASK, COMPLETE_TASK} from '../constants/action-types';

export const addTask = task => ({
    type: ADD_TASK,
    payload: task
});

export const completeTask = id => ({
    type: COMPLETE_TASK,
    payload: id
})
