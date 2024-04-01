describe('Function', function () {
	it('Should be function', function () {
		function sayHello(name: string): string {
			return `Hello ${name}`;
		}

		expect(sayHello('Bagas')).toBe('Hello Bagas');

		function printHello(name: string): void {
			console.log(`Hellow ${name}`);
		}

		printHello('Bagas');
	});

	it('Should be support function parameter', function () {
		function sayHello(name: string = 'Guest'): string {
			return `Hello ${name}`;
		}

		expect(sayHello('Bagas')).toBe('Hello Bagas');
		expect(sayHello()).toBe('Hello Guest');
	});

	it('Should support rest parameters', function () {
		function sum(...value: number[]): number {
			let total = 0;
			for (const args of value) {
				total += args;
			}
			return total;
		}

		expect(sum(1, 2, 4, 5)).toBe(12);
	});

	it('Should optional params', function () {
		function sayHello(firstName: string, lastName?: string): string {
			if (lastName) {
				return `Hellow ${firstName} ${lastName}`;
			} else {
				return `Hellow ${firstName}`;
			}
		}

		expect(sayHello('Bagas')).toBe('Hellow Bagas');
		expect(sayHello('Bagas Hananto')).toBe('Hellow Bagas Hananto');
	});

	it('Should support function overloading', function () {
		function callMe(value: number): number;
		function callMe(value: string): string[];

		function callMe(value: any) {
			if (typeof value === 'number') {
				return value * 20;
			} else if (typeof value === 'string') {
				return value.split(' ');
			}
		}

		expect(callMe(20)).toBe(400);
		expect(callMe('Bagas Hananto')).toStrictEqual(['Bagas', 'Hananto']);
	});

	it('Should support function as params', function () {
		function sayHello(name: string, filter: (name: string) => string) {
			return `Hellow ${filter(name)}`;
		}

		function toUpper(name: string): string {
			return name.toUpperCase();
		}

		expect(sayHello('Bagas', toUpper)).toBe('Hellow BAGAS');

		expect(
			sayHello('Bagas', (name: string): string => name.toLowerCase()),
		).toBe('Hellow bagas');
	});
});
