import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import snackbarReducer from './snackbar/snackbarReducer';

const middleware = [thunk];

const reducers = combineReducers({
  snackbar: snackbarReducer,
});
const store = createStore(reducers, applyMiddleware(...middleware));

export type RootState = ReturnType<typeof reducers>;

export default store;
