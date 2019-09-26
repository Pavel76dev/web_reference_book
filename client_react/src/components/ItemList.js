import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('/materials');//передаестя через fetchData: (url) => dispatch(itemsFetchData(url))
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.description}
                    </li>
                ))}
            </ul>
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {//пробрасываем наш стейт и возвращаем объект с данными которые доступны теперь в компоненте в виде пропсов
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
//Оборачиваем компонент ItemList в функцию connect, куда пробрасываем стейт, функция принимает другую функцию
//mapStateToProps которая мапит стейт в пропсы обычно эта функция выносится отдельно
//теперь все данные из стора доступны в нашем компоненте
//передаем также акшины импортированные напрямую или через другие функции, так же как состояние он становится доступен в компоненте в виде пропсов. Далее можно создать метод который повесить на компонент и повесить его на элемент, внутрь акшина можно передавать например id который предварительно тоже передаем через пропсы 
//В методе мы вызываем созданный акшин и передаем нужные аргументы, он срабатывает и перехватывается редюсером. В редюсере с помощью поля типа определяется какой акшин сработал и вызывается соответствующий кейс который строит новый стейт, компоненты которые следят за обновлением стейта перехватывают новые данные (пропсы) за этим они следят с помощью функции connect, они обновляются  и соответственно обновляется UI.
