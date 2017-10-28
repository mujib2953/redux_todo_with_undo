import { combineReducers } from 'redux';

// --- custom reducers
import visibilityFilter from './visibilityFilter';
const todoApp = combineReducers({
    visibilityFilter
});

export default todoApp;