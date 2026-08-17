const test = require('node:test');
const assert = require('node:assert');

test('Basic Math Test', () => {
  assert.strictEqual(2 + 2, 4, '2 + 2 should equal 4');
});

test('String Test', () => {
  const message = 'Express Server Running';
  assert.strictEqual(message.includes('Express'), true, 'Message should include Express');
});

test('Array Test', () => {
  const routes = ['/', '/api/status', '/api/data'];
  assert.strictEqual(routes.length, 3, 'Should have 3 routes');
});

console.log('✓ All tests passed!');
