import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

//Вместо того, чтобы передавать три аргумента createStore функции, вам нужно передать два (один из них предназначен для предварительно загруженного состояния, то, что мы здесь не используем). Чтобы обойти это, все еще используя инструменты redux dev, вам нужно использовать инструменты dev как самого композитора:
//Подключаем REDUX_DEVTOOLS в случае если находимся в режиме разработки
/* eslint-disable no-underscore-dangle */
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
            applyMiddleware(thunk)// испрользую thunk для асинхронных запросов applyMiddleware-прокладка Мидлвейр находится между кодом, который диспатчит экшены (то есть генерирует события) и редьюсером (то есть функцией, которая их преобразует в новое состояние), пропускает через себя все возникающие экшены, меняет их (если считает нужным) и отправляет дальше — или не отправляет. Особенность мидлвейра в том, что он быть чистой функцией не обязан — и поэтому он может делать сайд-эффекты вроде запросов на сервер или чего угодно.
        )
    );
}
