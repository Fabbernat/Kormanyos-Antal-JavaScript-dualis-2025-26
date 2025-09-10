  const readline = require("readline");
  
  
  /**
   * Get input from the terminal as a string.
   * 
   * @param {string} question - The message to be printed to terminal.
   * @returns {Promise<string>} The user's input as a string.
   * 
   * @example
   * let name = await input("Enter your name");
   */
  const input = async (question) => {
      const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
      })
      return new Promise((resolve) => {
          rl.question(question, (answer) => {
              rl.close()
              resolve(answer)
          })
      })
  }
  
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
  
    toString() {
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
  (async () => {
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
    
    for (let i = 0; i < orarend.getHetiOrak().length; ++i) {
    const napiOrakObj = orarend.getHetiOrak()[i];
    const nap = Object.keys(napiOrakObj)[0];         // e.g. "hetfo"
    const orak = napiOrakObj[nap];                   // the array of lessons
    console.log(`A(z) ${i + 1}. nap (${nap}): ${orak.join(", ")}`);
    }
  })();
