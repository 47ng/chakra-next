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

  test('external URL - push', () => {
    fakeRouter.push = jest.fn()
    fakeRouter.replace = jest.fn()
    delete window.location
    window.location = Object.assign(new URL('http://localhost'), {
      assign: jest.fn(),
      replace: jest.fn(),
    }) as any
    render(<Redirect to="https://example.com" external />)
    expect(fakeRouter.push).not.toHaveBeenCalled()
    expect(fakeRouter.replace).not.toHaveBeenCalled()
    expect(window.location.assign).toHaveBeenCalledWith('https://example.com')
    expect(window.location.replace).not.toHaveBeenCalled()
  })
  test('external URL - replace', () => {
    fakeRouter.push = jest.fn()
    fakeRouter.replace = jest.fn()
    delete window.location
    window.location = Object.assign(new URL('http://localhost'), {
      assign: jest.fn(),
      replace: jest.fn(),
    }) as any
    render(<Redirect to="https://example.com" external replace />)
    expect(fakeRouter.push).not.toHaveBeenCalled()
    expect(fakeRouter.replace).not.toHaveBeenCalled()
    expect(window.location.replace).toHaveBeenCalledWith('https://example.com')
    expect(window.location.assign).not.toHaveBeenCalled()
  })
})
