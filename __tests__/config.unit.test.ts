import * as fixtures from './fixtures/init.test';
import {Config} from '../src/config'
// import process from 'process'

describe('config: test suite', () => {
  beforeAll(() => {
    fixtures.initTestEnv();
  });
  afterAll(() => {
    fixtures.cleanTestEnv();
  });

  test('config: default config values', () => {
    const cfg = new Config()
    expect(cfg.repo).toEqual('github/octocat')
    expect(cfg.workspace).not.toBe(undefined)
    expect(cfg.serverUrl).not.toBe(undefined)
    expect(cfg.apiUrl).toEqual('https://api.github.com')
    expect(cfg.owner).toEqual('accelerator-blueprints')
    expect(cfg.ref).toEqual('refs/heads/main')
    expect(cfg.sha).toEqual('6a3f7b3a12384')
    expect(cfg.event).toEqual('workflow_dispatch')
    expect(cfg.token).toEqual('super-secret-github-token')
  });
})
