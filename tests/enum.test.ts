import { Customer, CustomerType } from '../src/enum-type';

describe('Enum', function () {
	it('Should be support Enum', function () {
		const customer: Customer = {
			id: 1,
			name: 'Bagas Hananto',
			type: CustomerType.GOLD,
		};

		console.log(customer);
	});
});
