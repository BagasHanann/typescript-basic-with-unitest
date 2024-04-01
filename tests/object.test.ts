describe('Type alias object', function () {
	it('Should be union type object', function () {
		const person: { id: string; nama: string } = {
			id: '1',
			nama: 'Bagas',
		};

		console.log(person);

		person.id = '2';
		person.nama = 'Bagas Hananto';

		console.log(person);
	});
});
