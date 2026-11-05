//* Inheritance: a Manager is a Employee and additional responsibility.

class Employee {
	constructor(
		public name: string,
		// private _baseSalary: number,
		protected _baseSalary: number,
	) {}

	// get baseSalary(): number {
	// 	return this._baseSalary;
	// }

	set baseSalary(newSalary: number) {
		if (newSalary < 0) {
			throw new Error("Salary cannot be negetive");
		}
		this._baseSalary = newSalary;
	}

	describe(): string {
		return `${this.name} earns ${this.baseSalary}`;
	}
}

const employee = new Employee("tawhid", 222);
// console.log(employee.describe());

class Manager extends Employee {
	// teamMemberCount: number;

	// constructor(name: string, _baseSalary: number, teamMemberCount: number) {
	// 	super(name, _baseSalary);
	// 	this.teamMemberCount = teamMemberCount;
	// }

	constructor(
		name: string,
		_baseSalary: number,
		public teamMemberCount: number,
	) {
		super(name, _baseSalary);
	}

	describeWork(): string {
		return `${this.name} manages ${this.teamMemberCount} people`;
	}

	describeManager(): string {
		return `Manager ${this.name} earn ${this._baseSalary} monthly`;
	}
}

const manager = new Manager("Zihad", 10000, 20);
// console.log(manager.describeManager());
