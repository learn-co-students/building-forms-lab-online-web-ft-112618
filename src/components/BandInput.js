// import React, { Component } from 'react'
//
// class BandInput extends Component {
//
//   state = {
//     text: ''
//   };
//
//   handleChange = (event) => {
//     this.setState({
//       text: event.target.value
//     })
//   }
//
//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.addBand(this.state)
//     this.setState({
//       text: '',
//     })
//   }
//
//   render() {
//     return(
//       <div>
//         <form onSubmit={(event) => this.handleSubmit(event)}>
//             <label>Add Band</label>
//             <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
//           <input type="submit"/>
//         </form>
//       </div>
//     );
//   }
// }
//
// // const mapDispatchToProps = dispatch => {
// //   return {
// //     addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData})
// //   }
// // }
//
// export default BandInput;



import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <div>
        <div>
          <header>
            <p>Add Bands Here:</p>
          </header>
        </div>
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <input
              type="text"
              value={this.state.name}
              onChange={(event) => this.handleOnChange(event)} />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
};

export default BandInput;
