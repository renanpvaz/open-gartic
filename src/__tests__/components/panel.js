import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'

import Panel from '../../components/Panel'

describe('<Panel />', () => {
  it('renders without throwing an error', () => {
    expect(() => shallow(<Panel />)).to.not.throw()
  })

  it('defaults to <div />', () => {
    expect(shallow(<Panel />).find('div')).to.have.length(1)
  })

  it('renders specified tag', () => {
    expect(shallow(<Panel tag="section" />).find('section')).to.have.length(1)
  })

  it('renders children', () => {
    const child = <h1>Title</h1>

    expect(
      shallow(<Panel>{child}</Panel>).contains(child)
    ).to.equal(true)
  })

  it('sets inset spacing', () => {
    expect(
      shallow(<Panel inset="xs" />).hasClass('panel-inset-xs')
    ).to.equal(true)
  })

  it('can fit elements', () => {
    expect(
      shallow(<Panel fit />).hasClass('panel-fit')
    ).to.equal(true)
  })

  it('sets below spacing', () => {
    expect(
      shallow(<Panel below="xs" />).hasClass('panel-below-xs')
    ).to.equal(true)
  })

  it('sets between spacing', () => {
    expect(
      shallow(<Panel between="xs" />).hasClass('panel-between-xs')
    ).to.equal(true)
  })

  it('sets inline-between spacing', () => {
    expect(
      shallow(<Panel between="xs" inline />).hasClass('panel-between-inline-xs')
    ).to.equal(true)
  })

  it('allows using row and column flex directions', () => {
    expect(
      shallow(<Panel row />).props().style
    ).to.have.property('flexDirection', 'row')

    expect(
      shallow(<Panel column />).props().style
    ).to.have.property('flexDirection', 'column')
  })

  it('sets `justify-content` style', () => {
    const value = 'center'

    expect(
      shallow(<Panel justify={value} />).props().style
    ).to.have.property('justifyContent', value)
  })

  it('sets `align-items` style', () => {
    const value = 'center'

    expect(
      shallow(<Panel align={value} />).props().style
    ).to.have.property('alignItems', value)
  })

  it('sets `flex-wrap` style', () => {
    expect(
      shallow(<Panel wrap />).props().style
    ).to.have.property('flexWrap', 'wrap')
  })

})
