import {get} from 'env-var'
import * as core from '@actions/core'

const githubEvents = ['workflow_dispatch']

export class Config {
  constructor() {
  }

  workspace: string = get('GITHUB_WORKSPACE').required().example('src').asString()
  repo: string = get('GITHUB_REPOSITORY').required().example('github/octocat').asString()
  owner: string = get('GITHUB_REPOSITORY_OWNER').required().example('github').asString()
  ref: string = get('GITHUB_REF').required().asString()
  sha: string = get('GITHUB_SHA').required().asString()
  apiUrl: string = get('GITHUB_API_URL').default('https://api.github.com').asString()
  serverUrl: string = get('GITHUB_SERVER_URL').default('https://github.com').asString()
  event: string = get('GITHUB_EVENT_NAME').required().asEnum(githubEvents)
  token: string = get('GITHUB_TOKEN').required().default(core.getInput('token')).asString()
}
