import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'

import Button from '../../components/Button'

describe('<Button />', () => {
  it('renders without throwing an error', () => {
    expect(() => shallow(<Button />)).to.not.throw()
  })

  it('contains a single button element', () => {
    expect(shallow(<Button />).find('button')).to.have.length(1)
  })

  it('always has \'button\' className', () => {
    expect(shallow(<Button />).props().className).to.contain('button')
  })

  it('defaults to medium size', () => {
    expect(shallow(<Button />).props().className).to.contain('button--m')
  })

  it('adds \'fit\' className', () => {
    expect(shallow(<Button fit />).props().className).to.contain('button--fit')
  })

  it('adds \'primary\' className', () => {
    expect(shallow(<Button primary />).props().className).to.contain('button--primary')
  })

  it('adds \'ghost\' className', () => {
    expect(shallow(<Button ghost />).props().className).to.contain('button--ghost')
  })

  it('should disable button', () => {
    expect(shallow(<Button disabled />).props().disabled).to.equal(true)
  })

  it('renders passed children', () => {
    const text = 'click\'ere'

    expect(
      shallow(<Button>{text}</Button>).props()
    ).to.have.property('children').equal(text)
  })

  it('calls onClick() when clicked', () => {
    let hasClicked = false

    shallow(<Button onClick={() => (hasClicked = true)} />)
      .find('button')
      .simulate('click')

    expect(hasClicked).to.equal(true)
  })
})
