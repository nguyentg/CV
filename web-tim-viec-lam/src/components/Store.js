import majorReducer from './../reducers/majorReducre';

const redux = require('redux');

let majorState = {};

const allReducer = redux.combineReducers({
    majorState: majorReducer
});

var store = redux.createStore(allReducer);
// store.subscribe(() => {
//     console.log(JSON.stringify(store.getState()));
// });
export default store;