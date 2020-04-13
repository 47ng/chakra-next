import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '../../test/render'

const fakeRouter = {
  replace: jest.fn(),
  push: jest.fn(),
}
jest.mock('next/router', () => ({
  useRouter: () => fakeRouter,
}))
import { Redirect } from '../index'

describe('Redirect', () => {
  test('push', () => {
    fakeRouter.push = jest.fn()
    fakeRouter.replace = jest.fn()
    render(<Redirect to="/foo" />)
    expect(fakeRouter.push).toHaveBeenCalledTimes(1)
    expect(fakeRouter.push.mock.calls[0][0]).toEqual('/foo')
    expect(fakeRouter.push.mock.calls[0][1]).toEqual('/foo')
    expect(fakeRouter.replace).not.toHaveBeenCalled()
  })

  test('replace', () => {
    fakeRouter.push = jest.fn()
    fakeRouter.replace = jest.fn()
    render(<Redirect to="/foo" replace />)
    expect(fakeRouter.replace).toHaveBeenCalledTimes(1)
    expect(fakeRouter.replace.mock.calls[0][0]).toEqual('/foo')
    expect(fakeRouter.replace.mock.calls[0][1]).toEqual('/foo')
    expect(fakeRouter.push).not.toHaveBeenCalled()
  })

  test('dynamic route (as)', () => {
    fakeRouter.push = jest.fn()
    render(<Redirect to="/foo/[slug]" as="/foo/bar" />)
    expect(fakeRouter.push).toHaveBeenCalledTimes(1)
    expect(fakeRouter.push.mock.calls[0][0]).toEqual('/foo/[slug]')
    expect(fakeRouter.push.mock.calls[0][1]).toEqual('/foo/bar')
  })
})
