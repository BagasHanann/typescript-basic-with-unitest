describe('Loop', function () {
	it('For i', function () {
		const names = ['Bagas', 'Hananto', 'Putro'];

		for (let i = 0; i < names.length; i++) {
			const element = names[i];
			console.log(element);
		}
	});

	it('For in', function () {
		const names = ['Bagas', 'Hananto', 'Putro'];

		for (const key in names) {
			console.log(names[key]);
		}
	});

	it('For of', function () {
		const names = ['Bagas', 'Hananto', 'Putro'];

		for (const key of names) {
			console.log(key);
		}
	});

	it('While', function () {
		let counter = 0;
		while (counter < 10) {
			console.log(counter);
			counter++;
		}
	});

	it('Should support do while', function () {
		let counter: number = 0;
		do {
			counter++;

			if (counter == 10) break;
			if (counter % 2 == 0) continue;

      console.log(counter);
		} while (true);
	});
});
