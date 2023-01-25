class Form{
    items = [];
    method = "GET";

    constructor( conteiner, method, action){
        this.conteiner = document.querySelector(conteiner);
        this.method = method;
        this.action = action;
    }
     addItem(item){
        this.items.push(item);
     }
}


class Input{

    _type = "text";
    required = false;

    constructor(name, label){
        this.name = name;
        this.label = label;
    }

    get type(){
        return this._type;
    }

    set type(t){
        if(['text', 'passoword', 'email', 'submit'].includes(t)){
            this._type = t;
        }else{
            throw new Error(`input "${t}" type doesn't exist`)
        }
    }

}

class Button extends Input{
   constructor(label){
        super('',label);
        this.type = 'submit';
    }
}

//IMPLEMENTAÇÂO

// Formulário
let form = new Form('.formArea','POST','https://site.com.br');

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

console.log(form.items);