# Case Flipper

A lightweight, zero-dependency TypeScript utility library for converting strings between various casing formats.

## Features

- 🚀 **Zero Dependencies**: Pure TypeScript implementation.
- 📦 **ESM Support**: Built for modern environments.
- 📘 **TypeScript Ready**: Full type definitions included.
- ✅ **Tested**: High test coverage with Vitest.

## Supported Formats

- `snake_case`
- `kebab-case`
- `camelCase`

## Installation

```bash
npm install caseflipper
```

## Usage

```typescript
import { snakeCase, kebabCase, camelCase } from 'caseflipper';

// Snake Case
console.log(snakeCase('helloWorld')); // hello_world
console.log(snakeCase('hello-world')); // hello_world

// Kebab Case
console.log(kebabCase('helloWorld')); // hello-world
console.log(kebabCase('hello_world')); // hello-world

// Camel Case
console.log(camelCase('hello_world')); // helloWorld
console.log(camelCase('hello-world')); // helloWorld
```

## License

MIT © [Khalid Kakar](https://khalidkakar.pro)
