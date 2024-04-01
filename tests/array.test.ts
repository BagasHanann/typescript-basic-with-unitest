describe('Array', function () {
	it('Should be Array', function () {
		const names: string[] = ['Bagas', 'Hananto', 'Putro'];
		const numbers: number[] = [1, 2, 3];

		console.log(names);
		console.log(numbers);
	});

	it('Should be readonly', function () {
		const hobbies: ReadonlyArray<string> = ['Futsal', 'Reading'];
		console.log({ hobbies });
	});

	it('Should support tuple', function () {
		const person: readonly [string, number] = ['Bagas', 1];

		console.log(person[0]);
		console.log(person[1]);
	});
});
