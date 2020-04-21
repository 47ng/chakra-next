import React from 'react'
import { render, getNodeText } from '../../test/render'
import '@testing-library/jest-dom/extend-expect'
import { NoSSR } from '../index'

describe('NoSSR', () => {
  test('Empty', () => {
    render(<NoSSR />)
  })
  test('Strings', () => {
    const { container } = render(<NoSSR fallback="server">client</NoSSR>)
    expect(getNodeText(container)).toEqual('client')
  })
  test('Strings', () => {
    const { container } = render(<NoSSR fallback="server">client</NoSSR>)
    expect(getNodeText(container)).toEqual('client')
  })
  test('Single element', async () => {
    const { findByText } = render(
      <NoSSR fallback={<div>Server</div>}>
        <div>Client</div>
      </NoSSR>
    )
    await findByText('Client')
  })
  test('Multiple element', async () => {
    const { findByText } = render(
      <NoSSR fallback={<div>Server</div>}>
        <div>Client 1</div>
        <div>Client 2</div>
      </NoSSR>
    )
    await findByText('Client 1')
    await findByText('Client 2')
  })

  test('Fragments', async () => {
    const { findByText } = render(
      <NoSSR fallback={<>Server</>}>
        <>
          <div>Client 1</div>
          <div>Client 2</div>
        </>
      </NoSSR>
    )
    await findByText('Client 1')
    await findByText('Client 2')
  })
})
