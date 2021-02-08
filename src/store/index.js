import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import counterReducer from './reducers/counter';

const rootReducer = combineReducers({
  ctr: counterReducer,
});
const logger = () => (next) => (action) => {
  const result = next(action);
  return result;
};

const composeEnhancers = composeWithDevTools || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;
