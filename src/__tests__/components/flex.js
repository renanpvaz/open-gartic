import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'

import Flex from '../../components/Flex'

describe('<Flex />', () => {
  it('renders without throwing an error', () => {
    expect(() => shallow(<Flex />)).to.not.throw()
  })

  it('defaults to <div />', () => {
    expect(shallow(<Flex />).find('div')).to.have.length(1)
  })

  it('has `display: flex`', () => {
    expect(
      shallow(<Flex />).find('div').props()
    ).to.have.nested.property('style.display', 'flex')
  })

  it('renders specified tag', () => {
    expect(shallow(<Flex tag="section" />).find('section')).to.have.length(1)
  })

  it('renders children', () => {
    const child = <h1>Title</h1>

    expect(
      shallow(<Flex tag="section">{child}</Flex>).contains(child)
    ).to.equal(true)
  })

  it('allows setting height and width', () => {
    const size = 30

    expect(
      shallow(<Flex height={size} width={size} />).find('div').props()
    ).to.nested.include({
      'style.height': size,
      'style.width': size,
    })
  })

  it('uses passed `flexDirection` or defaults to `initial`', () => {
    const direction = 'row'

    expect(
      shallow(<Flex />).find('div').props().style
    ).to.have.property('flexDirection', 'initial')

    expect(
      shallow(<Flex flexDirection={direction} />).find('div').props().style
    ).to.have.property('flexDirection', direction)
  })

  it('uses passed `alignItems` or defaults to `initial`', () => {
    const alignment = 'center'

    expect(
      shallow(<Flex />).find('div').props().style
    ).to.have.property('alignItems', 'initial')

    expect(
      shallow(<Flex alignItems={alignment} />).find('div').props().style
    ).to.have.property('alignItems', alignment)
  })

  it('uses passed `justifyContent` or defaults to `initial`', () => {
    const justify = 'center'

    expect(
      shallow(<Flex />).find('div').props().style
    ).to.have.property('justifyContent', 'initial')

    expect(
      shallow(<Flex justifyContent={justify} />).find('div').props().style
    ).to.have.property('justifyContent', justify)
  })

  it('uses passed `flexWrap` or defaults to `initial`', () => {
    const wrap = 'wrap'

    expect(
      shallow(<Flex />).find('div').props().style
    ).to.have.property('flexWrap', 'initial')

    expect(
      shallow(<Flex flexWrap={wrap} />).find('div').props().style
    ).to.have.property('flexWrap', wrap)
  })

  it('has <Flex.Row /> shorthand', () => {
    expect(
      mount(<Flex.Row />).find('div').props().style
    ).to.have.property('flexDirection', 'row')
  })

  it('has <Flex.Column /> shorthand', () => {
    expect(
      mount(<Flex.Column />).find('div').props().style
    ).to.have.property('flexDirection', 'column')
  })

  it('has <Flex.Wrap /> shorthand', () => {
    expect(
      mount(<Flex.Wrap />).find('div').props()
    ).to.nested.include({
      'style.flexDirection': 'row',
      'style.flexWrap': 'wrap',
    })
  })

  it('has <Flex.Center /> shorthand', () => {
    expect(
      mount(<Flex.Center />).find('div').props()
    ).to.nested.include({
      'style.justifyContent': 'center',
      'style.alignItems': 'center',
    })
  })

  it('has <Flex.SpaceBetween /> shorthand', () => {
    expect(
      mount(<Flex.SpaceBetween />).find('div').props()
    ).to.nested.include({
      'style.flexDirection': 'row',
      'style.justifyContent': 'space-between',
    })
  })
})
