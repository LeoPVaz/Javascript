class Form {
    items = [];
    method = "GET";

    constructor(conteiner, method, action) {
        this.conteiner = document.querySelector(conteiner);
        this.method = method;
        this.action = action;
    }
    addItem(item) {
        this.items.push(item);
    }

    render(){
        let formElement = document.createElement('form');
        formElement.setAttribute('method', this.method);
        formElement.setAttribute('action', this.action);

        for(let i in this.items){
            this.items[i].render(formElement);
        }

        this.conteiner.appendChild(formElement);
    }
}


class Input {

    _type = "text";
    required = false;

    constructor(name, label) {
        this.name = name;
        this.label = label;
    }

    get type() {
        return this._type;
    }

    set type(t) {
        if (['text', 'passoword', 'email', 'submit'].includes(t)) {
            this._type = t;
        } else {
            throw new Error(`input "${t}" type doesn't exist`)
        }
    }

    render(formElement){
        let el = document.createElement('input');
        el.type = this.type;
        el.name = this.name;
        el.placeholder = this.label;
        el.required = this.required;
        formElement.appendChild(el);
    }

}

class Button extends Input {
    constructor(label) {
        super('', label);
        this.type = 'submit';
    }

    render(formElement){
        let el = document.createElement('input');
        el.type = this.type;
        el.value = this.label;
        formElement.appendChild(el);
    }
}

//IMPLEMENTAÇÂO

// Formulário
let form = new Form('.formArea', 'POST', 'https://site.com.br');

// Email
let email = new Input("email", 'Digite seu e-mail');
email.type = 'email';
email.required = true;
form.addItem(email);

// Senha
let passoword = new Input("passoword", 'Digite sua senha')
passoword.type = 'passoword';
form.addItem(passoword);

// Botão
let button = new Button("Enviar");
form.addItem(button);

form.render();