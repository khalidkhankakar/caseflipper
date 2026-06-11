import { snakeCase } from "../utils.js";
import { test, expect } from "vitest";

test('converts string to snake case', () => {
    expect(snakeCase('HelloWorld')).toBe('hello_world');
    expect(snakeCase('hello world')).toBe('hello_world');
    expect(snakeCase('hello-world')).toBe('hello_world');
    expect(snakeCase('hello_world')).toBe('hello_world');
    expect(snakeCase('Hello World')).toBe('hello_world');
    expect(snakeCase('Hello-World')).toBe('hello_world');
    expect(snakeCase('Hello_World')).toBe('hello_world');
});