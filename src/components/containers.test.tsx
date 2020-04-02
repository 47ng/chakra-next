import React from 'react'
import { render } from '../../test/render'
import '@testing-library/jest-dom/extend-expect'
import { Container, FlexContainer, StackContainer } from './containers'

describe('Containers', () => {
  test('Container', () => {
    const { getByTestId } = render(<Container data-testid="container" />)
    const element = getByTestId('container')
    expect(element.tagName).toEqual('DIV')
    const style = getComputedStyle(element)
    expect(style.display).toEqual('block')
    expect(style.maxWidth).toEqual('36rem')
    expect(style.marginLeft).toEqual('auto')
    expect(style.marginRight).toEqual('auto')
    expect(style.paddingLeft).toEqual('0.5rem')
    expect(style.paddingRight).toEqual('0.5rem')
  })

  test('Container - wide', () => {
    const { getByTestId } = render(<Container wide data-testid="container" />)
    const element = getByTestId('container')
    expect(element.tagName).toEqual('DIV')
    const style = getComputedStyle(element)
    expect(style.display).toEqual('block')
    expect(style.maxWidth).toEqual('48rem')
    expect(style.marginLeft).toEqual('auto')
    expect(style.marginRight).toEqual('auto')
    expect(style.paddingLeft).toEqual('0.5rem')
    expect(style.paddingRight).toEqual('0.5rem')
  })

  test('FlexContainer', () => {
    const { getByTestId } = render(<FlexContainer data-testid="container" />)
    const element = getByTestId('container')
    expect(element.tagName).toEqual('DIV')
    const style = getComputedStyle(element)
    expect(style.display).toEqual('flex')
    expect(style.flexDirection).toEqual('column')
    expect(style.maxWidth).toEqual('36rem')
    expect(style.marginLeft).toEqual('auto')
    expect(style.marginRight).toEqual('auto')
    expect(style.paddingLeft).toEqual('0.5rem')
    expect(style.paddingRight).toEqual('0.5rem')
  })

  test('FlexContainer - wide', () => {
    const { getByTestId } = render(
      <FlexContainer wide data-testid="container" />
    )
    const element = getByTestId('container')
    expect(element.tagName).toEqual('DIV')
    const style = getComputedStyle(element)
    expect(style.display).toEqual('flex')
    expect(style.flexDirection).toEqual('column')
    expect(style.maxWidth).toEqual('48rem')
    expect(style.marginLeft).toEqual('auto')
    expect(style.marginRight).toEqual('auto')
    expect(style.paddingLeft).toEqual('0.5rem')
    expect(style.paddingRight).toEqual('0.5rem')
  })

  test('StackContainer', () => {
    const { getByTestId } = render(<StackContainer data-testid="container" />)
    const element = getByTestId('container')
    expect(element.tagName).toEqual('DIV')
    const style = getComputedStyle(element)
    expect(style.display).toEqual('flex')
    expect(style.flexDirection).toEqual('column')
    expect(style.maxWidth).toEqual('36rem')
    expect(style.marginLeft).toEqual('auto')
    expect(style.marginRight).toEqual('auto')
    expect(style.paddingLeft).toEqual('0.5rem')
    expect(style.paddingRight).toEqual('0.5rem')
  })

  test('StackContainer - wide', () => {
    const { getByTestId } = render(
      <StackContainer wide data-testid="container" />
    )
    const element = getByTestId('container')
    expect(element.tagName).toEqual('DIV')
    const style = getComputedStyle(element)
    expect(style.display).toEqual('flex')
    expect(style.flexDirection).toEqual('column')
    expect(style.maxWidth).toEqual('48rem')
    expect(style.marginLeft).toEqual('auto')
    expect(style.marginRight).toEqual('auto')
    expect(style.paddingLeft).toEqual('0.5rem')
    expect(style.paddingRight).toEqual('0.5rem')
  })
})
