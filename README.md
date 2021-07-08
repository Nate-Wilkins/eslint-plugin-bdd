# [eslint](https://github.com/eslint/eslint)-plugin-bdd

[![npm](http://img.shields.io/npm/v/eslint-plugin-bdd.svg?style=flat-square)](https://www.npmjs.org/package/eslint-plugin-bdd)
[![license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/Nate-Wilkins/eslint-plugin-bdd/blob/master/LICENSE)
[![status](https://img.shields.io/travis/Nate-Wilkins/eslint-plugin-bdd.svg?style=flat-square)](https://travis-ci.org/Nate-Wilkins/eslint-plugin-bdd)
[![test coverage](https://img.shields.io/badge/test%20coverage-100%25-green?style=flat-square)](https://travis-ci.com/Nate-Wilkins/eslint-plugin-jsort)
[![dependencies](https://badges.depfu.com/badges/9d2beee59530f90517a8918dc718a973/overview.svg)](https://badges.depfu.com/github/Nate-Wilkins/eslint-plugin-bdd?project_id=28347)

> ESLint plugin with rules to lint (BDD) Behavior Driven Development specs and tests.

```bash
$ npm install eslint-plugin-bdd
```

## Usage

Add `bdd` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix.

```js
{
	"plugins": [
		"bdd"
	]
}
```

Then configure the rules you want to use under the rules section.

```js
{
	"rules": {
		"bdd/focus": 2,
		"bdd/exclude": 2
	}
}
```

### Supported Rules

- [`bdd/focus`](./docs/rules/focus.md)
- [`bdd/exclude`](./docs/rules/exclude.md)

For more examples on what each rule does take a look at the test samples.

