import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import TextInput from '../../components/TextInput'

describe('<TextInput />', () => {
  it('renders without throwing an error', () => {
    expect(() => shallow(<TextInput />)).to.not.throw()
  })

  it('contains a single input element', () => {
    expect(shallow(<TextInput />).find('input')).to.have.length(1)
  })

  it('has "text" type', () => {
    expect(shallow(<TextInput />).props().type).to.equal('text')
  })

  it('always has "text-input" className', () => {
    expect(shallow(<TextInput />).hasClass('text-input')).to.equal(true)
  })

  it('adds "big" className', () => {
    expect(shallow(<TextInput big />).hasClass('text-input--big')).to.equal(true)
  })

  it('uses given placeholder', () => {
    const placeholder = 'type here'

    expect(
      shallow(<TextInput placeholder={placeholder} />).props()
    ).to.have.property('placeholder', placeholder)
  })

  it('uses given name', () => {
    const name = 'input'

    expect(shallow(<TextInput name={name} />).props()).to.have.property('name', name)
  })
  
  it('uses given value', () => {
    const value = 'input'

    expect(
      shallow(<TextInput value={value} />).props()
    ).to.have.property('value', value)
  })

  it('calls onChange()', () => {
    let hasChanged = false

    shallow(<TextInput onChange={() => (hasChanged = true)} />)
      .find('input')
      .simulate('change', {})

    expect(hasChanged).to.equal(true)
  })

  it('returns target when onChange() is called', () => {
    const value = 'a'
    let receivedValue = ''

    shallow(
      <TextInput onChange={target => (receivedValue = target.value)} />
    ).find('input')
     .simulate('change', { target: { value } })

    expect(receivedValue).to.equal(value)
  })

  it('calls onPressEnter()', () => {
    let hasPressed = false

    shallow(<TextInput onPressEnter={() => (hasPressed = true)} />)
      .find('input')
      .simulate('keypress', { key: 'Enter' })

    expect(hasPressed).to.equal(true)
  })
})
