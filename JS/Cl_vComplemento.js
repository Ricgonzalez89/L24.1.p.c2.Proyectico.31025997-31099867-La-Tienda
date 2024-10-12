export default class Cl_vComplemento {
    constructor(controlador) {
        this.vista = document.getElementById("complementoForm");
        this.inPreA = document.getElementById("complementoForm_inPreA");
        this.inPreB = document.getElementById("complementoForm_inPreB");
        this.inPreC = document.getElementById("complementoForm_inPreC");
        this.btAgregarPrecio = document.getElementById("complementoForm_btAgregarPrecio");
        this.btAgregarPrecio.onclick = () => 
            controlador.agregarPrecio({
                proA: this.inPreA.value,
                proB: this.inPreB.value,
                proC: this.inPreC.value
            })
    }

    mostrar() {
        this.vista.hidden = false;
    }

    ocultar() {
        this.vista.hidden = true;
    }
}