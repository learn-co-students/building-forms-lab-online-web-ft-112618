import { expect } from 'chai';
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import BandInput from '../src/components/BandInput'
import BandsContainer from '../src/containers/BandsContainer'
import sinon from 'sinon'
import { renderer } from '../src/index'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import manageBand from '../src/reducers/manageBand'
import App from '../src/App'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('BandInput component', () => {


  it('calls dispatch when form is submitted', () => {
    const store = createStore(manageBand)

    let spy = sinon.spy(store, "dispatch")

    const wrapper = mount(<Provider store={store}><App /></Provider>)

    expect(wrapper.find('input').length > 0, "No input elements found in the application").to.equal(true)
    let input = wrapper.find('input').first()
    let form = wrapper.find('form')

    input.simulate('change', { target: { value: 'Hello' } })
    form.simulate('submit',  { preventDefault() {} })

    expect(spy.calledOnce).to.equal(true);

  });
});


describe('Bands Container', () => {
  it('is a child of the app component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(BandsContainer)).to.have.length(1);
  });

  it('renders a list element for each of the bands in ', () => {
    const store = createStore(manageBand)

    let spy = sinon.spy(store, "dispatch")

    const wrapper = mount(<Provider store={store}><App /></Provider>)

    expect(wrapper.find('input').length > 0, "No input elements found in the application").to.equal(true)
    let input = wrapper.find('input').first()
    let form = wrapper.find('form')

    expect(store.getState().bands, "'bands' not found in the store").to.exist
    expect(store.getState().bands, "Initial state of 'bands' should be an empty array").to.be.empty

    input.simulate('change', { target: { value: 'Flight 909' } })
    form.simulate('submit',  { preventDefault() {} })
    input.simulate('change', { target: { value: 'Gwar' } })
    form.simulate('submit',  { preventDefault() {} })

    expect(store.getState().bands.length, "There are " + store.getState().bands.length + " bands in the store, but " + wrapper.find('li').length + "li elements").to.equal(wrapper.find('li').length)

  });

})
