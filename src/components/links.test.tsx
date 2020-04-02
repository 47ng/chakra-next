import React from 'react'
import { render, getNodeText } from '../../test/render'
import '@testing-library/jest-dom/extend-expect'
import { RouteLink, OutgoingLink, ButtonRouteLink } from './links'

describe('Links', () => {
  test('RouteLink', () => {
    const { getByTestId } = render(<RouteLink to="/foo" data-testid="link" />)
    const element = getByTestId('link')
    expect(element.tagName).toEqual('A')
    expect(element).toHaveAttribute('href', '/foo')
  })

  test('OutgoingLink', () => {
    const { getByTestId } = render(
      <OutgoingLink href="/foo" data-testid="link" />
    )
    const element = getByTestId('link')
    expect(element.tagName).toEqual('A')
    expect(element).toHaveAttribute('href', '/foo')
  })

  test('ButtonRouteLink', () => {
    const { getByTestId } = render(
      <ButtonRouteLink to="/foo" data-testid="link">
        Go to Foo
      </ButtonRouteLink>
    )
    const element = getByTestId('link')
    expect(element.tagName).toEqual('A')
    expect(element).toHaveAttribute('href', '/foo')
    expect(getNodeText(element)).toEqual('Go to Foo')
  })
})
