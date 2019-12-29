declare namespace md5Regex {
    interface Options {
        /**
        Only match an exact string. By default, it matches any MD5 hashes in a string. Useful with `RegExp#test()` to check if a string is an MD5 hash.
        @default false
        */
        readonly exact?: boolean;
    }
}

/**
Returns a regex for matching MD5 hashes.
@example
```
import md5Regex = require('md5-regex');
md5Regex().test('nodejsrocks 1abcb33beeb811dca15f0ac3e47b88d9');
//=> true
```
*/
declare function md5Regex(options?: md5Regex.Options): RegExp;

export = md5Regex;