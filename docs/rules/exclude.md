# `bdd/exclude` Rule

> Rule to determine if any specs/tests are being excluded.

This rule catches the following cases:

- `describe*.skip(/* */)`:
- `xit(/* */)`, `xdescribe(/* */)`: Provided by some frameworks to exclude tests
- `it('An empty test')`, `describe*('An empty test')`: Disallow empty tests

## Examples

The `skip` method is provided by some frameworks to exclude tests.

```js
it.skip(() => {
  /* Skipped test. */
});
```

```js
describe.skip("Test Suite", () => {
  /* Skipped tests */
});
describe.skip("Test Suite");
```

```js
// xdescribe
xdescribe("skip this too", function () {
  // xit
  xit("not cool", function () {
    // Not run
  });
});
```

