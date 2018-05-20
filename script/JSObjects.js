class JusticeLeague {
    constructor(name) {
        this._name = name;
        this._health = 15;
        this._age = 0;
    }

    get age() {
        return _age;
    }

    set age(value) {
        this._age = value;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value;
    }

}

class Superman extends JusticeLeague {
    constructor(name) {
        super(name);
        this._sex = male;
        this._movement = 'fly';
        this._noise = 'crack';
    }

    move() {
        return '<p>' + this._name + ' ' + this._movement + ' flies to save the day with a loud ' + this._noise + '!';

    }

    get capes() {
        return this._capes;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value;
    }
}


class Wonderwoman extends JusticeLeague {
    constructor(name) {
        super(name);
        this._sex = femal;
        this._movement = 'leaps';
        this._noise = 'swoosh';
    }

    move() {
        return '<p>' + this._name + ' ' + this._movement + ' into action with a big ' + this._noise + '!';

    }

    get noCapes() {
        return this._noCapes;
    }

}

class Batman extends JusticeLeague {
    constructor(name) {
        super(name);
        this._sex = male;
        this._movement = 'stealthily';
        this._noise = 'sound';
    }

    move() {
        return '<p>' + this._name + ' ' + this._movement + ' hides in the shadows without a' + this._noise + '!';

    }

    get capes() {
        return this._capes;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value;
    }
}

let justiceLeague = [];

function createJusticeLeagues() {

    numJusticeLeagues = document.getElementById('number').value;

    for (let i = 0; i < numJusticeLeagues; i++) {
        let hero = Math.floor((Math.random() * 3) + 1);

        if (hero == 1) {
            let justiceLeague = new ManOfSteel('Superman');
            heros.push(hero);
        }

        if (hero == 2) {
            let justiceLeague = new Babe('Wonderwoman');
            heros.push(hero);
        }

        if (hero == 3) {
            let justiceLeague = new Bat('Batman');
            heros.push(hero);
        }
	}

    displayJusticeLeagu(numJusticeLeagues);
}

function displayJusticeLeagues(numJusticeLeagues) {
    let output = '<h2>The Justice League</h2><ul>';

    for (let i = 0; i < numJusticeLeagues; i++) {
        let justiceLeague = JusticeLeagues[i];

        output += '<li><h3>' + justiceLeague._name + '</h3><p>' + justiceLeague.move() + '</p><p>I have ' + justiceLeague._capes + ' cape</p>';
    }

    output += '</ul>';

    document.getElementById('output-heroes').innerHTML = output;
}
