import * as core from '@actions/core'
import { run } from '../src'

test('paradox', () => expect(1).toBe(1))

describe('index: action debug messages', () => {

  beforeEach(() => {
    jest.resetModules();
  });

  it('outputs a debug message', async () => {
    const debugMock = jest.spyOn(core, 'debug')
    await run()
    expect(debugMock).toBeCalledTimes(3)
  })
})

describe('index: successful path', () => {

  it('does output messages', async () => {
    const setOutMock = jest.spyOn(core, 'setOutput')
    await run()
    expect(setOutMock).toBeCalledTimes(1)
    expect(setOutMock).toHaveLength(0)
  })
})
