describe('Union', function () {
	it('Should support Union', function () {
		let sample: string | number | boolean = 'Bagas';

		sample = 12;
		sample = true;

		console.log(sample);
	});

	it('Should support Union method', function () {
		function process(value: number | string | boolean) {
			if (typeof value === 'string') {
				return value.toUpperCase();
			} else if (typeof value === 'number') {
				return value + 2;
			} else {
				return !value;
			}
		}

		expect(process(100)).toBe(102);
		expect(process('Bagas')).toBe('BAGAS');
		expect(process(true)).toBe(false);
	});
});
