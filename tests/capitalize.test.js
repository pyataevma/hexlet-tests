import { capitalize } from "../src/capitalize.js";
import { strict as assert } from 'node:assert';

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }

assert.strictEqual(capitalize('hello'),'Hello');

// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }

assert.strictEqual(capitalize(''),'');

console.log('Все тесты пройдены!');