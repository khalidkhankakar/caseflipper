import { snakeCase, kebabCase, camelCase } from '../utils.js';
import { test, expect } from 'vitest';

const complexParagraph =
  'Hello World! This is a test. It has numbers like 123, symbols like #@!, and Mixed-Case_words.';

test('snakeCase complex inputs', () => {
  expect(snakeCase('HelloWorld')).toBe('hello_world');
  expect(snakeCase(complexParagraph)).toBe(
    'hello_world_this_is_a_test_it_has_numbers_like_123_symbols_like_and_mixed_case_words',
  );
});

test('kebabCase complex inputs', () => {
  expect(kebabCase('HelloWorld')).toBe('hello-world');
  expect(kebabCase(complexParagraph)).toBe(
    'hello-world-this-is-a-test-it-has-numbers-like-123-symbols-like-and-mixed-case-words',
  );
});

test('camelCase complex inputs', () => {
  expect(camelCase('HelloWorld')).toBe('helloWorld');
  expect(camelCase(complexParagraph)).toBe(
    'helloWorldThisIsATestItHasNumbersLike123SymbolsLikeAndMixedCaseWords',
  );
  expect(camelCase('a-b-c')).toBe('aBC');
  expect(camelCase('PascalCase')).toBe('pascalCase');
});

test('edge cases', () => {
  expect(snakeCase('')).toBe('');
  expect(kebabCase('   ')).toBe('');
  expect(camelCase('!!!')).toBe('');
});
