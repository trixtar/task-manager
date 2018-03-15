import {ADD_TASK, COMPLETE_TASK} from '../constants/action-types';

const initialState = {
    tasks: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]};
        case COMPLETE_TASK:
            const task = state.tasks.find(({id}) => id === action.payload);
            task.completed = true;
            console.log('action', action)
            console.log('task', task)
            const updated = [
                ...state.tasks.filter(task => task.id !== action.payload),
                task,
           ]

           console.log('updated', updated)

            return {...state, tasks: updated};
        default:
            return state;
    }
}

export default rootReducer;
