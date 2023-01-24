class Input{

    _type = "text";
    required = false;

    consturctor(name, label){
        this.name = name;
        this.label = label;
    }

    get type(){
        return this._type;
    }

    set type(t){
        if(['text', 'password', 'email', 'submit'].includes(t)){
            this._type = t;
        }else{
            throw new Error(`input "${t}" type doesn't exist`)
        }
    }


}

//IMPLEMENTAÇÂO

// Email
let email = new Input("email", 'Digite seu e-mail');
email.type = 'email';
email.required = true;

// Senha
let passoword = new Input("passoword", 'Digite sua senha')
passoword.type = 'passoword';