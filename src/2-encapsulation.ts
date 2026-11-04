//* Encapsulation: Protect a state and change it through methods.
//* Access Modifier
//? public
//? private
//? protected
//? readonly

class Employee {
	constructor(
		public name: string,
		private _baseSalary: number,
	) {}

	get baseSalary(): number {
		return this._baseSalary;
	}

	getSalaryBonus(): number {
		return this._baseSalary + 1;
	}

	set baseSalary(newSalary: number) {
		if (newSalary < 0) {
			throw new Error("Salary cannot be negetive");
		}
		this._baseSalary = newSalary;
	}
}

const employee = new Employee("tawhid", 222);
const employee2 = new Employee("z", 2223243);

// employee.baseSalary = -12342;
// console.log(employee.baseSalary);
// console.log(employee.getSalaryBonus());
