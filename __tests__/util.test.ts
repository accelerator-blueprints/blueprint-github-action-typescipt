import * as utils from '../src/utils'

describe('utils: test suite', () => {

  test.each([
    ['github/super-octokat', 'super-octokat'],
    ['github/.github', '.github']
  ])('given %p and result message %p', (input, expected) => {
    const actual = utils.asRepoWithoutOwner(input)
    expect(actual).toEqual(expected)
  })

  test.each([
    ['github_super-octokat', 'Repository github_super-octokat is not valid'],
    ['github/super/octokat', 'Repository github/super/octokat is not valid']
  ])('given %p and result message %p', (input, expected) => {
    expect(() => {
      utils.asRepoWithoutOwner(input)
    }).toThrow(expected)
  })

  test.each([
    ['refs/pull/2351235etgsdtg', 'refs/pull/2351235etgsdtg'],
    ['refs/heads/main', 'refs/heads/main'],
    ['refs/tags/v1.2.45', 'refs/tags/v1.2.45']
  ])('given ref %p and result ref %p', (input, expected) => {
    const actual = utils.asGitHubRef(input)
    expect(actual).toEqual(expected)
  })

  test.each([
    ['', 'GITHUB_REF not set'],
    ['refs/unknown/2351235etgsdtg', 'must be a valid github ref'],
  ])('github ref not provided', (input, expected) => {
    expect(() => {
      utils.asGitHubRef(input)
    }).toThrow(expected)
  })
})
