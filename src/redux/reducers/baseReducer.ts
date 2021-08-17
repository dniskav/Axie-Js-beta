import { Action, PayloadAction, TypeConstant } from 'typesafe-actions';
import { TEST } from '../constants';
import { IinitialState, IActionType } from '../types';

export const initialState: IinitialState = {};

export const baseReducer = (
  state: IinitialState = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, IActionType>,
): any => {
  switch (action.type) {
    case TEST:
      return state;
    default:
      return {
        ...state,
      };
  }
};

export default baseReducer;
