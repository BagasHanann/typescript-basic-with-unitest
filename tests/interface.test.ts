import { Seller } from '../src/interface-type';

describe('Interface', function () {
	it('Should be interface', function () {
		const seller: Seller = {
			id: 1,
			name: 'Seller',
			npwp: '1232412',
		};

		console.log(seller);
	});

	it('Should support function inteface', function () {
		interface addFunction {
			(value1: number, value2: number): number;
		}

		const add: addFunction = (value1: number, value2: number): number => {
			return value1 * value2;
		};

		expect(add(4, 4)).toBe(16);
	});

	it('Should support array interface', function () {
		interface stringArray {
			[index: number]: string | number | boolean;
		}

		const person: stringArray = ['Bagas', 22, true];

		console.log(person[0]);
		console.log(person[1]);
		console.log(person[2]);

		expect(person[0]).toBe('Bagas');
		expect(person[1]).toBe(22);
		expect(person[2]).toBe(true);
	});

	it('Should support object interface', function () {
		interface StringDictionary {
			[key: string]: string;
		}

		const object: StringDictionary = {
			nama: 'Bagas',
			address: 'Depok',
		};

		console.log(object['nama']);
		console.log(object['address']);

		expect(object['nama']).toBe('Bagas');
		expect(object['address']).toBe('Depok');
	});
});
