export default class Cl_vCliente {
    constructor (controlador) {
        this.vista = document.getElementById("clienteForm");
        this.inCedula = document.getElementById("clienteForm_inCedula");
        this.inCodProducto = document.getElementById("clienteForm_inCodProducto");
        this.inCantidad = document.getElementById("clienteForm_inCantidad");
        this.btAceptar = document.getElementById("clienteForm_btAceptar");
        this.btAceptar.onclick = () => 
            controlador.agregarCliente(
                this.inCedula.value,
                this.inCodProducto.value,
                this.inCantidad.value
            );
        this.ocultar();
    }

    mostrar () {
        this.vista.hidden = false;
    }

    ocultar () {
        this.vista.hidden = true;
    }
}