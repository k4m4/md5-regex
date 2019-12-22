import test from 'ava';
import m from '.';

const fixtures = [
	'1abcb33beeb811dca15f0ac3e47b88d9',
	'897b47d80a717715378832539b4c1340',
	'5f4dcc3b5aa765d61d8327deb882cf99',
	'21232f297a57a5a743894a0e4a801fc3',
	'c44a471bd78cc6c2fea32b9fe028d30a'
];

const fixturesNot = [
	'16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk',
	'0x281055afc982d96fab65b3a49cac8b878184cb16',
	'nikolaskam@gmail.com foo',
	'absdefghijklmn[IPv6:2001:db8::2]',
	'XekiLaxnqpFb2m4NQAEcsKutZcZgcyfo6W'
];

test('Exact MD5 encoded strings', t => {
	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}
});

test('Non-exact MD5 encoded strings', t => {
	for (const x of fixtures) {
		t.is((m().exec(`foo ${x} bar`) || [])[0], x);
	}
});

test('Non-MD5 encoded strings', t => {
	for (const x of fixturesNot) {
		t.false(m({exact: true}).test(x));
	}
});
