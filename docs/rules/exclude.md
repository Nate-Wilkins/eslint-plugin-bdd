# Exclude

> Rule to determine if any specs/tests are being excluded.

If any behavioral `it`, `describe*` invokes their `skip` method or only provide a description this rule will catch them.
This rule also catches the handy `xdescribe` and `xit` that some BDD frameworks support.

## Example
```js
describe('my cool tests', function () {
	// skip
	it.skip('should work', function () {
		// Cool stuff
	});

	// no additional argument
	it('should work again');
});

// skip, no additional argument
describe.skip('other cool tests');

// xdescribe
xdescribe('skip this too', function () {
	// xit
	xit('not cool', function () {
		// Not run
	});
});
```
