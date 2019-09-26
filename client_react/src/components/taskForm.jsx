import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import 'bootstrap/dist/css/bootstrap.min.css';

class TaskForm extends Component {
  prevId = 2;

  handleSubmit = e => {
    e.preventDefault();
    const username = this.getName.value;
    const email = this.getEMail.value;
    const text = this.getText.value;
    const data = {
      username,
      email,
      text
    };
    /*
        this.props.dispatch({
          type: 'ADD_TASK',
          data
        });
    */
    this.getName.value = '';
    this.getEMail.value = '';
    this.getText.value = '';
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title mb-5 text-center">Создать задачу</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                ref={input => (this.getName = input)}
                required
                className="form-control"
                type="text"
                placeholder="Введите имя"
              />
            </div>
            <div className="form-group">
              <input
                ref={input => (this.getEMail = input)}
                required
                rows="4"
                className="form-control"
                placeholder="Введите адрес эл. почты"
              />
            </div>
            <div className="form-group">
              <textarea
                ref={input => (this.getText = input)}
                required
                rows="4"
                className="form-control"
                placeholder="Начните писать текст"
              />
            </div>
            <button className="btn btn-success">ОПУБЛИКОВАТЬ</button>
          </form>
        </div>
      </div>
    );
  }
}
export default TaskForm;