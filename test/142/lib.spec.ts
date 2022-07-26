import {
  assert,

} from 'chai';

import detectCycle from '../../src/142/lib';
import { createLinkedList } from '../../src/142/CreateLinkedList';

suite('Testing ...', () => {
  // suiteSetup(async () => {
  // });
  //
  // suiteTeardown(async () => {
  //
  // });

  suite('142', () => {
    test('case 1', async () => {
      assert.strictEqual(detectCycle(null), null);
      assert.strictEqual(detectCycle(createLinkedList([1], -1)), null);
      assert.strictEqual(detectCycle(createLinkedList([3, 2, 0, -4], 1))!.val, 2);
      assert.strictEqual(detectCycle(createLinkedList([1, 2], 0))!.val, 1);
      assert.strictEqual(detectCycle(createLinkedList([1], 0))!.val, 1);
    });
  });
});
