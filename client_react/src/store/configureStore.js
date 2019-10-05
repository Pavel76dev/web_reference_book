import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

//comm1
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

export default function configureStore(initialState) {
    return createStore(
        rootReducer,//все редюсеры
        initialState,//начальное сосотояние
        composeEnhancers(
            applyMiddleware(thunk)//comm2
        )
    );
}
