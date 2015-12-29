# Focus

> Rule to determine if focus tests are used.

If any behavioral `it`, `describe*` invokes their `only` method this rule will catch them.
This rule will also catch handy focus keywords like `ddescribe`, `fdescribe`, `iit`, and `fit` that some BDD frameworks support.

## Example
```js
describe.only('my cool tests', function () {
	// only
	it.only('should work', function () {
		// Cool stuff
	});

	it('should still work', function () {
		// Never called because we're only testing 'should work'
	});
});

// ddescribe
ddescribe('something', function () {
	iit('more stuff', function () {
		// Stuff
	});
});

// fdescribe
fdescribe('something else', function () {
	fit('other stuff', function () {
		// Stuff
	});
});
```
