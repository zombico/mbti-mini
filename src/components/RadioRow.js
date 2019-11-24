import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioRow extends Component {
  constructor(){ 
    super()
    this.state = {
      selection: 0
    }
    this.select = this.select.bind(this)
  }
  
  select(e) {    
    this.setState({ selection: e.target.value })
    this.props.handleQ(this.props.id, e.target.value)
  }

  render() {
    const inputfields = this.props.options.map(option => {
      return(
        <input
          className="radios"
          value={option}
          type="radio"
          checked={option == this.state.selection}
          onChange={this.select}        
        />  
      )
    })

    return(
      <section className="question-container">
        <label htmlFor={this.props.id}>{this.props.title}</label>
        <div className="row-container" id={this.props.id}>
          <span className="agree">Agree</span>
          {inputfields}
          <span className="disagree">Disagree</span>
        </div>
      </section>
    )
  }

  
}

RadioRow.propTypes = {
  className: PropTypes.string,
  value: PropTypes.array,
  type: PropTypes.string,
  checked: PropTypes.object,
  onChange: PropTypes.func
}

export default RadioRow