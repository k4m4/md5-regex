import {expectType} from 'tsd';
import md5Regex = require('.');

expectType<RegExp>(md5Regex());
expectType<RegExp>(md5Regex({exact: true}));
