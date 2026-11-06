//* Abstraction: every employee must define how their pay is calculated.
abstract class Employee {
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

	abstract calculatePay(): number;
	abstract getResources(): string[];
	abstract registryTime(): string;
}

// const employee = new Employee("Tawhid", 111);

class Manager extends Employee {
	calculatePay() {
		return this.baseSalary + 1;
	}

	getResources() {
		return ["A", "B"];
	}

	registryTime() {
		return "06-11-2026";
	}
}

// class Developer extends Employee {
// 	calculatePay() {
// 		return this.baseSalary + 2;
// 	}
// }
