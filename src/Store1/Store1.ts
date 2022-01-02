import {combineReducers, createStore, Store} from 'redux';
import {reducer} from './Reducer';
export type ReducerRootType=ReturnType<typeof reducerRoot>
const reducerRoot=combineReducers({
    data:reducer,
})
export const store1:Store<ReducerRootType>=createStore(reducerRoot);