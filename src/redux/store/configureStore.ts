import { createStore, compose, applyMiddleware, Store } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { IApplicationState } from '../types';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(createStore);

export default function configureStore(): Store<IApplicationState> {
    const store = createStoreWithMiddleware(rootReducer);
    return store;
}