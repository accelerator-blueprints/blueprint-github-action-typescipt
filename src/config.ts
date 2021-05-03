import { get } from 'env-var';

export const config = {
  workspace: get('GITHUB_WORKSPACE').required().example('src').asString(),
  repo: get('GITHUB_REPOSITORY').required().example('github').asRegExp('^[^/]+/[^/]+$'),
  ref: get('GITHUB_REF').required().asString(),
  sha: get('GITHUB_SHA').required().asString(),
  token: get('GITHUB_TOKEN').required().asString()
}

