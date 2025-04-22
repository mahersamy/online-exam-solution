import { createReducer, on } from '@ngrx/store';
import { setToken } from './auth.actions';

export const tokenReducer = createReducer(
  {},
  on(setToken, (state, action) => (state = action.user))
);
