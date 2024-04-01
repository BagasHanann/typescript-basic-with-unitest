export type ID = string | number;

export type Category = {
	id: ID;
	nama: string;
	desription?: string;
};

export type Product = {
	id: ID;
	nama: string;
	price: number;
	category: Category;
	desription?: string;
};
