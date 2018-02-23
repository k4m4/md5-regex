# md5-regex [![Build Status](https://travis-ci.org/k4m4/md5-regex.svg?branch=master)](https://travis-ci.org/k4m4/md5-regex)

> Regular expression for matching MD5 encoded strings.


## Install

```
~ ❯❯❯ npm install md5-regex
```


## Usage

```js
const md5Regex = require('md5-regex');

md5Regex().test('nodejsrocks 1abcb33beeb811dca15f0ac3e47b88d9');
//=> true

md5Regex({exact: true}).test('nodejsrocks 1abcb33beeb811dca15f0ac3e47b88d9 foo');
//=> false

md5Regex.v6({exact: true}).test('1abcb33beeb811dca15f0ac3e47b88d9');
//=> true

'nodejsrocks 1abcb33beeb811dca15f0ac3e47b88d9 rainbow 897b47d80a717715378832539b4c1340'.match(md5Regex());
//=> ['1abcb33beeb811dca15f0ac3e47b88d9', '897b47d80a717715378832539b4c1340']
```


## API

### md5Regex([options])

Returns a regex for matching MD5 hashes.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Matches any MD5 hash in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is an MD5 hash.


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)