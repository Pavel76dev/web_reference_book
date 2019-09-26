import React from 'react';
import PropTypes from 'prop-types';

import './materialsItem.css';
/*
const MaterialsItem = ({ item }) => (
  <div key={item.id}>
    {item.translation}
  </div>
);

export default MaterialsItem;
*/
class MaterialsItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // item: props.item,
      isHovered: false,
      //selected: 0
    };
    /* (() =>
       this.state.selected = this.props.item.find(item => item.S == "2")
     )();*/
  }
  /*
    componentWillMount() {
      const project = this.props.item.find(item => item.S === "2");
      if (project) {
        this.setState({
          selected: project.selected
        });
      }
    }
  */
  handleEnter() {
    this.setState({
      isHovered: true
    });
  }

  handleLeave() {
    this.setState({
      isHovered: false
    });
  }
  //{item.button} //    const selected = item.find(item => item.S == "2")  //              {selected}      {selected.S}
  //className={id === activeFilter ? "insert_selected" : 'insert'}
  render() {
    const { item, index, selected } = this.props;
    return (
      <React.Fragment
      >
        <div
          className={index === selected.selected ? "insert_selected" : 'insert'}
          onMouseEnter={this.handleEnter.bind(this)}
          onMouseLeave={this.handleLeave.bind(this)}
          key={item._id}>
          {item.insert}
        </div>
        {this.state.isHovered ? (
          <div className="description"
            onMouseEnter={this.handleEnter.bind(this)}
            onMouseLeave={this.handleLeave.bind(this)}
          >{item.description}</div>
        ) : (<div className="translation"><i>{item.leng}</i> {item.translation}</div>)}

      </React.Fragment>

    );
  }
}
/*
                {this.state.selected === this.props.item.id ? (
          <div className="description"
            onMouseEnter={this.handleEnter.bind(this)}
            onMouseLeave={this.handleLeave.bind(this)}
          >{item.description}</div>
        ) : (<div className="translation"><i>{item.leng}</i> {item.translation}</div>)}
*/
export default MaterialsItem;