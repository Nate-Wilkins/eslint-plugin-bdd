# [eslint](https://github.com/eslint/eslint)-plugin-bdd
[![npm](http://img.shields.io/npm/v/eslint-plugin-bdd.svg?style=flat-square)](https://www.npmjs.org/package/eslint-plugin-bdd)
[![license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/Nate-Wilkins/eslint-plugin-bdd/blob/master/LICENSE)
[![status](https://img.shields.io/travis/Nate-Wilkins/eslint-plugin-bdd.svg?style=flat-square)](https://travis-ci.org/Nate-Wilkins/eslint-plugin-bdd)
[![dependencies](https://david-dm.org/nate-wilkins/eslint-plugin-bdd.svg?style=flat-square)](https://david-dm.org/nate-wilkins/eslint-plugin-bdd)

> ESLint plugin with rules to lint BDD specs.

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
