import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '../../test/render'
import { Svg } from './svg'

describe('Svg', () => {
  test('SVG', () => {
    const { getByTestId } = render(
      <Svg data-testid="svg" aria-label="Test">
        <circle cx="0" cy="0" r="1" />
      </Svg>
    )
    const element = getByTestId('svg')
    expect(element.tagName).toEqual('svg')
    expect(element.getAttribute('xmlns')).toEqual('http://www.w3.org/2000/svg')
    expect(element.getAttribute('role')).toEqual('img')
    expect(element.getAttribute('aria-label')).toEqual('Test')
    expect(element.getAttribute('viewBox')).toBeNull()
    expect(element.childElementCount).toEqual(1)
    expect(element.firstElementChild!.tagName).toBe('circle')
  })
})
