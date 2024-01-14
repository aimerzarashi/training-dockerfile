// localhost:3000に対して、GETメソッドを送信してhttpステータスコード200を返すことを確認するテスト
// node:test、node:assertを使用する
const test = require('node:test');
const assert = require('node:assert');

test('GET / 200', async () => {
  const response = await fetch('http://localhost:3000')
  assert.strictEqual(response.status, 200);
})
