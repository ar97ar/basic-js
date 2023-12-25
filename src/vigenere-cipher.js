const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }

    return this.crypt(str, key, true)

  }
  decrypt(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }

    return this.crypt(str, key, false)
  }

  crypt(str, key, crypting) {
    let shift = key.repeat(Math.ceil(str.length / key.length)).toUpperCase();
    let upper_str = String(str).trim().toUpperCase();
    let r = '';

    for(let i = 0, j = 0; i < upper_str.length; i++) {
      let code = upper_str.charCodeAt(i);

      if(this.alphabet.indexOf(upper_str[i]) > -1) {
        if(crypting) code = code + shift[j++].charCodeAt(0);
        else code = (code + this.alphabet.length - shift[j++].charCodeAt(0));
        code = code % this.alphabet.length + 65;
      }

      r += String.fromCharCode(code);

    }

    let res

    if (this.direct) {
      res = r
    } else {
      res = r.split('').reverse().join('')
    }

    return res
  }


}


module.exports = {
  VigenereCipheringMachine
};
