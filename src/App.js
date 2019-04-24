import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BandsContainer />
      </div>
    );
  }
};

// const mapStateToProps = state => ({ bands: state.bands })

export default App;
