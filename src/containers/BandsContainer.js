import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Band from '../components/Band'
import {connect} from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, id) => <Band key={id} text={band} />)
  render() {
    return(
      <div>
        BandsContainer

        <div>
          <BandInput />
        </div>
        <div>
          {this.renderBands()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)
