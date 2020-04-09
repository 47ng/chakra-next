import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '../../test/render'
import { SvgBox } from '../index'

describe('SvgBox', () => {
  test('SVG', () => {
    const { getByTestId } = render(
      <SvgBox data-testid="svg" aria-label="Test">
        <circle cx="0" cy="0" r="1" />
      </SvgBox>
    )
    const element = getByTestId('svg')
    expect(element.tagName).toEqual('svg')
    expect(element.getAttribute('xmlns')).toEqual('http://www.w3.org/2000/svg')
    expect(element.getAttribute('role')).toEqual('img')
    expect(element.getAttribute('viewBox')).toBeNull()
    expect(element.childElementCount).toEqual(1)
    expect(element.firstElementChild!.tagName).toBe('circle')
  })
})
