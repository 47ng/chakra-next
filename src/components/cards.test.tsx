import React from 'react'
import { render } from '../../test/render'
import '@testing-library/jest-dom/extend-expect'
import { Card, FlexCard, StackCard } from '../index'

describe('Cards', () => {
  test('Card', () => {
    const { getByTestId } = render(<Card data-testid="card" />)
    const element = getByTestId('card')
    expect(element.tagName).toEqual('DIV')
    const style = getComputedStyle(element)
    expect(style.display).toEqual('block')
    expect(style.backgroundColor).toEqual('rgb(255, 255, 255)')
    expect(style.borderRadius).toEqual('4px')
    expect(style.padding).toEqual('1rem')
    expect(style.boxShadow).toEqual(
      '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)'
    )
  })
  test('FlexCard', () => {
    const { getByTestId } = render(<FlexCard data-testid="card" />)
    const element = getByTestId('card')
    expect(element.tagName).toEqual('DIV')
    const style = getComputedStyle(element)
    expect(style.display).toEqual('flex')
    expect(style.backgroundColor).toEqual('rgb(255, 255, 255)')
    expect(style.borderRadius).toEqual('4px')
    expect(style.padding).toEqual('1rem')
    expect(style.boxShadow).toEqual(
      '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)'
    )
  })

  test('StackCard', () => {
    const { getByTestId } = render(<StackCard data-testid="card" />)
    const element = getByTestId('card')
    expect(element.tagName).toEqual('DIV')
    const style = getComputedStyle(element)
    expect(style.display).toEqual('flex')
    expect(style.backgroundColor).toEqual('rgb(255, 255, 255)')
    expect(style.borderRadius).toEqual('4px')
    expect(style.padding).toEqual('1rem')
    expect(style.boxShadow).toEqual(
      '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)'
    )
  })
})
