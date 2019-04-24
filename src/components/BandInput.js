// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addName(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)} >
          <label htmlFor="name">Band Name </label>
          <input name="name" type="text" onChange={this.handleChange} value={this.state.name}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {addName: state => dispatch({type: "ADD_BAND", payload: state})}
}

export default connect(null, mapDispatchToProps)(BandInput)
