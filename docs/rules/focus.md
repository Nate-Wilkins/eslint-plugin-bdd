# Focus

> Rule to determine if focus tests are used.

If any behavioral `it`, `describe*` invokes their `only` method this rule will catch them.
This rule will also catch the handy `ddescribe` and `iit` that some BDD frameworks support.

## Example
```js
describe('my cool tests', function () {
	// only
	it.only('should work', function () {
		// Cool stuff
	});

	it('should still work', function () {
		// Never called because we're only testing 'should work'
	});
});

// only
describe.only('other cool tests');

// ddescribe
ddescribe('something', function () {
	iit('more stuff', function () {

	});
});
```
