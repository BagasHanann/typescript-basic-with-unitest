import sayHello from '../src/say-hello';

describe('Say Hello', function () {
	it('Shouldbe say hello', function () {
		expect(sayHello('Bagas')).toBe('Hello Bagas');
	});
});
