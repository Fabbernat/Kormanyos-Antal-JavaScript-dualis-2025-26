import input from "./input.js";

class Tanulo{
    constructor(nev, emailCim) {
        this._nev = nev;
        this._emailCim = emailCim;
    }

    getNev() {
        return this._nev;
    }

    getEmailCim() {
        return this._emailCim;
    }

    setNev(nev) {
        this._nev = nev;
    }

    setEmailCim(emailCim) {
        this._emailCim = emailCim;
    }
}

const tanulok = [];
const adat = await input("Kérek egy számot: ");
for (let i = 0; i < Number(adat); i++) {
    const nev = await input("Kérem a nevet: ");
    const emailCim = await input("Kérem az email címet: ");
    const tanulo = new Tanulo(nev, emailCim);
    tanulok.push(tanulo); // .push instead of .add
}

class Orarend {
    constructor(hetiOrak = []) {
        this.hetiOrak = hetiOrak;
    }

    getHetiOrak() {
        return this.hetiOrak;
    }

    setHetiOrak(hetiOrak) {
        this.hetiOrak = hetiOrak;
    }

    add(ora) {
        this.hetiOrak.push(ora);
    }
}

const orakAsStr = await input("Add meg az órákat vesszővel elválasztva: ");
const orarend = new Orarend();
orarend.setHetiOrak(orakAsStr.split(","));
