import { Employee, Manager } from '../src/extend-interface';

describe('Interface-Extend', function () {
	it('Should be support extend interface', function () {
		const employee: Employee = {
			id: 1,
			name: 'Bagas',
			division: 'Information Technology',
		};

		const manager: Manager = {
			id: 2,
			name: 'Hananto',
			division: 'Information Technology',
			numberOfEmployee: 10,
		};

		console.log(employee);
		console.log(manager);
	});

	it('Should support function in interface', function () {
		interface Person {
			nama: string;
			sayHello(name: string): string;
		}

		const person: Person = {
			nama: 'Bagas',
			sayHello: (name: string): string => {
				return `Hello ${name}`;
			},
		};

		console.log(person.sayHello('Apip'));
		console.log(person.nama);
	});

	it('Support intersection types', function () {
		interface HasName {
			name: string;
		}

		interface HasID {
			id: number;
		}

		type Domain = HasID & HasName;
	
    const domain: Domain = {
      id:1,
      name: 'Bagas'
    }

    expect(domain.id).toBe(1)
    expect(domain.name).toBe("Bagas")
  });
});
