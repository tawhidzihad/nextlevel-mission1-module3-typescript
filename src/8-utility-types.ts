//* Utility Types

//* Partial
interface User {
	id: string;
	name: string;
	email: string;
}

// interface OptionalUser {
// 	id?: string;
// 	name?: string;
// 	email?: string;
// }

const updateProfile = (id: string, date: Partial<User>) => {};

updateProfile("This is id", {});

//* Required
interface Config {
	apiKey?: string;
	timeout?: number;
}

const initialize = (config: Required<Config>) => {};

initialize({ apiKey: "edsd", timeout: 3000 });

//* Pick
interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;

const preview: ProductPreview = {
	name: "asd",
	description: "adsfsgfdg",
};

//* Omit
interface Employee {
	id: number;
	name: string;
	salary: number;
	nid: string;
}

type PublicEmployee = Omit<Employee, "salary" | "nid">;

const directoryEntry: PublicEmployee = {
	id: 42,
	name: "Tawhid",
	// salary: 200,
	// nid: "12334254",
};

//* Record
type Environment = "development" | "staging" | "production";

// interface IEnviorment {
// 	development: string;
// 	staging: string;
// 	production: string;
// }

const apiUrls: Record<Environment, string> = {
	development: "http://localhost:3000",
	staging: "https://staging.api.com",
	production: "https://api.com",
};
