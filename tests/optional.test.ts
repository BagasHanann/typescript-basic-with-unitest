describe('Null and Undefined', function () {
	it('Should be null adn undefined optional', function () {
		const optional = (name?: string | null) => {
			name ? console.log(`Hello ${name}`) : console.log(`Hello`);
		};

		optional('Bagas');

		const name: string | undefined = undefined;
		optional(name);

		optional(null);
	});
});
