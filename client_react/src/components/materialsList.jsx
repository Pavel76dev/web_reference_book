import React from 'react';
import PropTypes from 'prop-types';
import MaterialsItem from './materialsItem';

import './materialsList.css';
class MaterialsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: "false",
      selected: {
        selected: 0,
        S: 0
      }
    };
    /* (() =>
       this.state.selected = this.props.item.find(item => item.S == "2")
     )();*/
  }
  /*
    componentWillMount() {
      this.setState({
        selected: 5
      });
      const project = this.props.items.find(item => item.S === "2");
      if (project) {
        this.setState({
          selected: project.S
        });
      }
    }
  */
  // selected={selected} selected={this.state.selected}
  render() {
    const { items } = this.props;
    // let { selected } = this.state;
    let project = this.props.items.find(item => item.S == 2);
    if (project) {
      this.state.selected = project;
    };

    return (
      <div className="table">
        {//this.state.isHovered
        }
        {
          //project = items.find(item => item.S === "2")
          //Определить выделенную строку
          (items.find(item => item.S === "2")) ? (
            this.state.selected = items.find(item => item.S === "2")
          ) : (
              <></>
            )
        }
        {//items.find(item => item.S === "2")
        }
        {items.map((item, index) => (
          <MaterialsItem item={item} index={index} selected={this.state.selected} />
        ))}
      </div>
    );
  }
}

export default MaterialsList;