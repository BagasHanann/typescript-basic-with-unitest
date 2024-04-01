import { Person } from '../src/person';

describe('Assertions', function () {
	it('Should be assetions type', function () {
		const person: any = {
			id: 1,
			name: 'Bagas',
		};

		const person2: Person = person as Person;

		console.log(person2);
	});
});
