export default class Cl_mComplemento {
    constructor({proA, proB, proC}) {
        this.precioA = proA;
        this.precioB = proB;
        this.precioC = proC;
    }

    set precioA(pA) {
        this._precioA = +pA;
    }

    set precioB(pB) {
        this._precioB = +pB;
    }

    set precioC(pC) {
        this._precioC = +pC;
    }

    get precioA() {
        return this._precioA;
    }

    get precioB() {
        return this._precioB;
    }

    get precioC() {
        return this._precioC;
    }
}