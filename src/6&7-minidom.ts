abstract class UIelem {
	constructor(protected id: string) {}
	abstract render(): string;
}

class Input extends UIelem {
	constructor(
		id: string,
		private type: string,
		private placeholder: string,
	) {
		super(id);
	}
	render() {
		return `<input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}"></input>`;
	}
}

class Button extends UIelem {
	constructor(
		id: string,
		private label: string,
	) {
		super(id);
	}

	render() {
		return `<button id="${this.id}">${this.label}</button>`;
	}
}

class Form extends UIelem {
	private childrens: UIelem[] = [];

	appendChild(child: UIelem) {
		this.childrens.push(child);
	}

	render() {
		const childernHTML = this.childrens
			.map((child) => child.render())
			.join("\n ");

		return `<form id="${this.id}" style="border: 1px solid #ccd; padding: 20px; display: flex; flex-direction: column; gap: 6px; max-width: 340px; border-radius: 6px;">\n ${childernHTML} \n</form>`;
	}
}

const formElem = new Form("login-form");

const nameInput = new Input("name", "text", "Enter your name");
const emailInput = new Input("email", "email", "Enter your email");
const passwordInput = new Input("pass", "password", "Enter your password");
const submitButton = new Button("submitBtn", "Submit");

formElem.appendChild(nameInput);
formElem.appendChild(emailInput);
formElem.appendChild(passwordInput);
formElem.appendChild(submitButton);

const rootELem = document.getElementById("root");

if (rootELem) {
	rootELem.innerHTML = formElem.render();
}
