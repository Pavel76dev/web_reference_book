import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemsFetchData, addItemsData } from '../../actions/items';
//import * as actions from '../../actions/items'; //все такими какие они есть
import ToDoInput from '../../components/todo-input';
//import { addTast, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';

//import ToDoInput from '../../components/materialsInput';
import MaterialsList from '../../components/materialsList';
///import Footer from '../../components/footer/footer';

import './materials.css';

class Materials extends Component {


  componentDidMount() {
    this.props.fetchData('/materials');//передаестя через fetchData: (url) => dispatch(itemsFetchData(url))
    // this.props.selected = items.find(item => item.S == "2");
    this.timer = setInterval(() => {
      this.props.fetchData('/materials');
      // this.mapStateToProps();
    }, 1000);
    // setInterval(() => {
    //    this.setState({})
    // }, 1000)
  }

  addTast = ({ key }) => {
    if (key === 'Enter') {
      this.props.addData('/materials');
    }
  }


  render() {

    const { items, hasErrored, isLoading } = this.props;

    if (hasErrored) {
      return <p>Произошла ошибка загрузки.</p>;
    }

    if (Object.keys(items).length === 1) {
      return <p>Извините. В MongoDB отсутствуют данные или они не получены.</p>;
    }
    /*
        if (isLoading) {
          return <p>Загрузка…</p>;
        }
    */
    //<ToDoInput onKeyPress={this.addTast} onChange={this.handleInputChange} />
    return (
      <div>
        <MaterialsList items={items} />
      </div>
    );
  }
}

/*
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>
            {item.description}
          </li>
        ))}
      </ul>
*/
Materials.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  // selected: PropTypes.object.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};
/*
const mapStateToProps = ({ items, HasErrored, IsLoading }) => {//пробрасываем наш стейт и возвращаем объект с данными которые доступны теперь в компоненте в виде пропсов
  return { items, itemsHasErrored, itemsIsLoading };
};
*/

const mapStateToProps = (state) => {//пробрасываем наш стейт и возвращаем объект с данными которые доступны теперь в компоненте в виде пропсов
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    addData: (url) => dispatch(addItemsData(url))
  };
};
/*
const mapAddItemsData = (dispatch) => {
  return {
    addData: (url) => dispatch(addItemsData(url))
  };
};
*/
export default connect(mapStateToProps, mapDispatchToProps)(Materials);
//comm1