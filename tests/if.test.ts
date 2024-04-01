describe('If Statement', function () {
	it('Should be If Statement', function () {
		const value = 90;

		if (value > 80) {
			console.log('Good');
		} else if (value > 60) {
			console.log('Not Bad');
		} else {
			console.log('try Again');
		}
	});

	it('Should support ternary operator', function () {
		const value = 80;
		value >= 80 ? console.log('Excellent') : console.log('Try Again');
	});

	it('Should support Switch', function () {
		function sayHello(name: string) {
			switch (name) {
				case 'Bagas':
					return 'Helo Bagas';
				case 'Apip':
					return 'Hellow Apip';
				default:
					return 'Hellow';
			}
		}

    expect(sayHello('Bagas')).toBe('Helo Bagas')
    expect(sayHello('Apip')).toBe('Hellow Apip')
	});
});
