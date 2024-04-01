import { Category } from '../src/type-alias';
describe('Alias', function () {
	it('Should be alias', function () {
		const category: Category = {
			id: 1,
			nama: 'Elektronik',
		};

		const product = {
			id: '1',
			nama: 'Iphone 14 Pro Max',
			price: '12000000',
			category: category,
		};

		console.log(product);
		console.log(category);
	});
});
