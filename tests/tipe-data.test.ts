describe('Tipe data', function () {
	it('Should must declare', () => {
		const nama: string = 'Bagas';
		const balance: number = 100;
		const isVip: boolean = true;
		expect(nama).toBe('Bagas');
		expect(balance).toBe(100);
		expect(isVip).toBe(isVip);
	});
});
