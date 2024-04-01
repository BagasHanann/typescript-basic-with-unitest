describe('Any', function () {
	it('Should support any', function () {
		const person: any = {
			name: 'Bagas',
			age: 22,
			isAlive: true,
		};

    person.name = 'Bagas Hananto'
    console.log(person);
	});
});
