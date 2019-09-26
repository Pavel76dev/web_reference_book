import React, { Component, Fragment } from 'react';
import './App.css';


import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//import ItemList from './components/ItemList';
import Title from './components/title';
import Materials from './containers/materials/materials';

const store = configureStore();

class App extends Component {
  state = { materials: [] }
  /*
    componentDidMount() {
      fetch('/materials')///users
        .then(res => res.json())
        .then(materials => this.setState({ materials }));
    }            
    ItemList />
  */
  // tasks={this.props.tasks} 
  //<Provider store> — позволяет создавать обёртку для React-приложения и делать состояние Redux доступным для 
  //всех компонентов-контейнеров в его иерархии.
  render() {
    //            <Title title="Materials App" />
    return (
      <div className="App">

        <Provider store={store}>
          <Fragment>
            <Materials />
          </Fragment>
        </Provider>,

      </div>
    );
  }
}
/*
        <h1>Users</h1>
        {this.state.materials.map(material =>
          <div key={material.id}>{material.description}</div>
        )}
*/
export default App;
