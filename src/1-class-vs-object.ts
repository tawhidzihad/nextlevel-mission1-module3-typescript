interface EMployee {
	name: string;
	baseSalary: number;
}

const employee: EMployee = {
	name: "Tawhid",
	baseSalary: 22222,
};

const employee2: EMployee = {
	name: "Z",
	baseSalary: 222222222,
};

//* Class
class Employee {
	name: string;
	baseSalary: number;

	constructor(name: string, baseSalary: number) {
		this.name = name;
		this.baseSalary = baseSalary;
	}
}

const employee3 = new Employee("tawhid", 222);
const employee4 = new Employee("z", 2223243);

// console.log(employee3);
// console.log(employee4);

// console.log(employee3 instanceof Employee);
// console.log(employee4 instanceof Employee);
