import {debug, setFailed, setOutput, info} from '@actions/core'
// import { getOctokit } from '@actions/github';
import {inspect} from 'util'

import Input from './input'

export const run = async () => {
  const inputs = new Input().inputs
  info(`Inputs: ${inspect(inputs)}`)
  // const octokit = getOctokit();

  debug(new Date().toTimeString())
  await execute(10)
  debug(new Date().toTimeString())

  setOutput('time', new Date().toTimeString())
}

export const execute = (milliseconds: number) => {
  return new Promise<void>(resolve => setTimeout(() => resolve(), milliseconds))
}

run()
  .then(() => {})
  .catch(error => {
    console.error('ERROR', error)
    setFailed(error.message)
  })
