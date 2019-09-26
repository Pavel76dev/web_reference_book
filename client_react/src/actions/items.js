/*
export const addTast = (title, description, unitOfMeasurement, quantity) => ({
    type: ADD_MATERIALS,
    title,
    description,
    unitOfMeasurement,
    quantity
  });
*/
export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                //  var selected = items.find(item => item.S == "2");
                dispatch(itemsFetchDataSuccess(items));
                // console.log(items);
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function addItemsData(url) {
    console.log(url);
    const data = {
        title: "пицы",//заглавие
        description: "свежие пицы",//описание
        unitOfMeasurement: "шт.",//единицы измерееия
        quantity: "123"//кличество
    };

    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => console.log(res))
        dispatch(itemsIsLoading(true));//рефакторить далее
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                dispatch(itemsFetchDataSuccess(items));
                // console.log(items);
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

/*
    console.log(url);
    const data = {
        title: "пицы",//заглавие
        description: "свежие пицы",//описание
        unitOfMeasurement: "шт.",//единицы измерееия
        quantity: "123"//кличество
    };
    return fetch(url, {
        method: 'post',
        headers: new Headers({
    'Content-Type': 'application/json'
  }),
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(res => console.log(res));
*/
/*
export function addItemsData(url) {
    console.log('data');
    post(url, {
        title: "пицы",//заглавие
        description: "свежие пицы",//описание
        unitOfMeasurement: "шт.",//единицы измерееия
        quantity: "123"//кличество
    })
        .then(data => console.log(data))      // обрабатываем результат вызова response.json()
        .catch(error => console.error(error))

    function post(url, data) {
        return fetch(url, {
            credentials: 'same-origin',  // параметр определяющий передвать ли разные сессионные данные вместе с запросом
            method: 'POST',              // метод POST
            body: JSON.stringify(data),  // типа запрашиаемого документа
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
            .then(response => response.json()) // возвращаем промис
    }
}
*/
/*
post('https://appdividend.com/api/v1/users', {user: 'Krunal'})
.then(data => console.log(data))      // обрабатываем результат вызова response.json()
.catch(error => console.error(error))

function post(url, data) {
return fetch(url, {
  credentials: 'same-origin',  // параметр определяющий передвать ли разные сессионные данные вместе с запросом
  method: 'POST',              // метод POST
  body: JSON.stringify(data),  // типа запрашиаемого документа
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
})
.then(response => response.json()) // возвращаем промис
}
*/
/*
пример использования аксиос
import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listNotes() {
        return axios.get(`${apiPrefix}/notes`);
    },

    createNote(data) {
        return axios.post(`${apiPrefix}/notes`, data);
    },

    deleteNote(noteId) {
        return axios.delete(`${apiPrefix}/notes/${noteId}`);
    }
}
*/