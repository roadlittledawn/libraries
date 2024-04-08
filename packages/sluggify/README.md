# Usage

Install via NPM:

  ```bash
  npm install @clangclangclang/sluggify
  ```

Install via Yarn:

```bash
yarn add @clangclangclang/sluggify
```

Import the package:

```javascript
import { sluggify } from '@clangclangclang/sluggify';
```

Use the package:

```javascript
const slug = sluggify('Hello, World!');
console.log(slug); // hello-world
```

  ## API

  ### `sluggify(input: string): string`

  Converts a string into a slug.

  #### Arguments

  - `input` - The string to convert into a slug.

  #### Returns

  - A slug version of the input string.

  #### Example

  ```javascript
  const slug = sluggify('Hello, World!');
  console.log(slug); // hello-world
  ```
