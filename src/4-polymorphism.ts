//* Poly = Many (Bohu)
//* Morph = Shape / Form (Roop)
//* -ism = State / Practice (Obostha ba Poddhoti)

//* Polymorphism: different employees respond differently to the same method call

class Employee {
	constructor(
		public name: string,
		protected _baseSalary: number,
	) {}

	get baseSalary(): number {
		return this._baseSalary;
	}

	set baseSalary(newSalary: number) {
		if (newSalary < 0) {
			throw new Error("Salary cannot be negetive");
		}
		this._baseSalary = newSalary;
	}

	calculatePay(taxRate: number): number {
		return this.baseSalary - this.baseSalary * taxRate;
	}
}

class Manager extends Employee {
	override calculatePay() {
		return this.baseSalary + 1;
	}
}

class Developer extends Employee {
	constructor(
		name: string,
		baseSalary: number,
		public type: string,
	) {
		super(name, baseSalary);
	}

	calculatePay(taxRate: number) {
		return this.baseSalary + 300 - this.baseSalary * taxRate;
	}
}

const employee = new Employee("Tawhid", 2000);
// console.log(employee.calculatePay(0.1));

const manager = new Manager("Zihad", 10000);
// console.log("Manager =>", manager.calculatePay());

const develoepr = new Developer("Tawhid Zihad", 200, "FullStack Develoepr");
// console.log(develoepr.calculatePay(0.1));
