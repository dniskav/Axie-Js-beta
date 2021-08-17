import {
  Action,
  PayloadAction,
  TypeConstant,
} from "typesafe-actions";

export interface IReducerAction<TPayload>
  extends Action<TypeConstant>,
  PayloadAction<TypeConstant, TPayload> { }

export interface IApplicationState {
  base: IinitialState
}

export interface IinitialState {

}

export type IActionType = any;

export type actionType = Action<TypeConstant> &
  PayloadAction<TypeConstant, IActionType>;

export type test = any;