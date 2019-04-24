import React, { Component } from 'react'
import { connect } from 'react-redux'
import addBand from '../actions/addBand'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => {
    return (
      this.props.bands.map((band, i) => <li key={i}>{band.name}</li>)
    )
  }
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({ bands: state.bands })

export default connect(mapStateToProps, { addBand })(BandsContainer)
