import { combineReducers } from 'redux';
import { IApplicationState } from '../types';
import { baseReducer } from './baseReducer';


const rootReducer = combineReducers<IApplicationState>({
  base: baseReducer,
});

export default rootReducer;
