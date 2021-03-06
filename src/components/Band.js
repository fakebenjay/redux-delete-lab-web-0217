import React, { Component } from 'react';

class Band extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }

  render() {
    return(
      <div>
        <li>
          {this.props.band.text}
          <button onClick={() => this.handleOnClick()}>KILL KILL KILL</button>
        </li>
      </div>
    );
  }
};

export default Band;
