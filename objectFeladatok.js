import input from "./input.js";

class Tanulo {
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

  static toString() {
    return `${this.getNev()}, ${this.getEmailCim()}`;
  }
}

class Orarend {
  constructor(
    hetiOrak = [
      { hetfo: ["matematika", "angol"] },
      { kedd: ["Webfejlesztés", "C#"] },
      { szerda: ["JavaScript", "WordPress"] },
      { csutortok: ["Fizika", "Biológia"] },
      { pentek: ["Történelem", "Földrajz"] },
    ]
  ) {
    this._hetiOrak = hetiOrak;
  }

  getHetiOrak() {
    return this._hetiOrak;
  }

  setHetiOrak(hetiOrak) {
    this._hetiOrak = hetiOrak;
  }

  add(ora) {
    this._hetiOrak.push(ora);
  }
}

const tanulok = [];
const adat = await input("Hány tanuló adatait szeretné bevinni?");
for (let i = 0; i < Number(adat); i++) {
  const nev = await input("Kérem a nevet: ");
  const emailCim = await input("Kérem az email címet: ");
  const tanulo = new Tanulo(nev, emailCim);
  tanulok.push(tanulo);
}

console.log(tanulok.map((t) => t.toString()));

const orakAsStr = await input("Add meg az órákat vesszővel elválasztva: ");
const orarend = new Orarend();
orarend.setHetiOrak(orakAsStr.split(","));

console.log(orarend.getHetiOrak());

orarend._hetiOrak[0].hetfo.push("Fizika");
console.log(orarend.getHetiOrak());
