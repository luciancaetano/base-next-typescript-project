import { ITodoState } from './state/index';

export * from './state/index';
export * from './base/redux';

export interface IAppState {
  todos: ITodoState;
}