// Knight ou Sorcerer - Guerreiro ou Mago
// LittleMonster ou BigMonster

const defaultCharcter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharcter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCharcter,
        name: 'Little Monster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}

const createBigMonster = () => {
    return {
        ...defaultCharcter,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

const stage = {
    figther1: null,
    figther2: null,
    figther1El: null,
    figther2El: null,

    start(figther1, figther2, figther1El, figther2El) {
        this.figther1 = figther1;
        this.figther2 = figther2;
        this.figther1El = figther1El;
        this.figther2El = figther2El;

        this.figther1El.querySelector('.atteckButton').addEventListener('click', () => this.doAttack(this.figther1, this.figther2));

        this.figther2El.querySelector('.atteckButton').addEventListener('click', () => this.doAttack(this.figther2, this.figther1));

        this.update();
    },
    update() {
        // Fighter 1
        this.figther1El.querySelector('.name').innerHTML = `${this.figther1.name} - ${this.figther1.life.toFixed(1)} HP`;
        let f1pct = (this.figther1.life / this.figther1.maxLife) * 100;
        this.figther1El.querySelector('.bar').style.width = `${f1pct}%`;
        // Fighter 2
        this.figther2El.querySelector('.name').innerHTML = `${this.figther2.name} - ${this.figther2.life.toFixed(1)} HP`;
        let f2pct = (this.figther2.life / this.figther2.maxLife) * 100;
        this.figther2El.querySelector('.bar').style.width = `${f2pct}%`;


    },
    doAttack(attacking, attecked) {
        if (attacking.life <= 0 || attecked.life <= 0) {
            log.addMessage(`Alguém tá morto, não pode atacar.`);
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attecked.defense * defenseFactor;

        if (actualAttack > actualDefense) {
            attecked.life -= actualAttack;
            attecked.life = attecked.life < 0 ? 0 : attecked.life;
            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attecked.name}`);
        } else {
            log.addMessage(`${attecked.name} conseguiu defender...`);
        }

        this.update();
    }

}

const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },
    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';
        for (let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }

    }
}


