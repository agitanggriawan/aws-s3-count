# AWS S3 Count

This package is to calculate the size of the existing folder AWS S3.

## Install

With yarn

```bash
yarn add aws-s3-count
```

or npm

```bash
npm install aws-s3-count
```

## Example Usage

```js
const s3Count = require('aws-s3-count');

// Declare your S3 Conifg
const config = {
  accessKeyId: 'myAccessKeyId',
  secretAccessKey: 'mySecretAccessKey',
  endpoint: 'https://example-url.com',
  bucket: 'my-bucket',
};

// Using promise
s3Count('publics/', false, config).then((data) =>
  console.log('Total Size', data, 'Bytes')
);

// Using async / await
const count = async () => {
  const size = await s3Count('publics/', false, config);
  console.log('Total Size', size, 'Bytes');

  return size;
};
```

## Parameters

There are 3 paramaters you must passing.
`s3Count(first, second, third)`

Parameters:

1. `first (String)`: Folder inside bucket will be count. Example: `publics/`, `publics/sub_folder/`.
2. `second (boolean)`: By default set `true`. If true. will calculating all sub folder that you declare path folder inside first parameter. If `false`, will calculating current folder.
3. `third (object)`: Config AWS S3, you can see like example above.
