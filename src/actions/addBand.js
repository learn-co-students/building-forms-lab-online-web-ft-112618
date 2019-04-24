const addBand = (text) => {
  return ({
    type: 'ADD_BAND',
    payload: text
  })
}

export default addBand
