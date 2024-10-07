export default class Cl_vTienda {
    constructor(controlador) {
    this.vista = document.getElementById("mainForm");
    this.tabla = document.getElementById("mainForm_tabla");
    this.btAgregarCliente = document.getElementById("mainForm_btAgregarCliente");
    this.lblProductoMayorVenta = document.getElementById("mainForm_lblProductoMayorVenta");
    this.lblMontoTotal = document.getElementById("mainForm_lblMontoTotal");
    this.btAgregarCliente.onclick = () => controlador.mostrarVistaCliente();
    }
    mostrar() {
    this.vista.hidden = false;
    }
    ocultar() {
    this.vista.hidden = true;
    }
    reportarCliente({cedula, codProducto, cantidad, montoPagar, acMontoTotal, productoMayorVenta}) {
        this.tabla.innerHTML += `
        <tr>
            <td>${cedula}</td>
            <td>${codProducto}</td>
            <td>${cantidad}</td>
            <td>$${montoPagar}</td>
        </tr>`;
        this.lblProductoMayorVenta.innerHTML = productoMayorVenta;
        this.lblMontoTotal.innerHTML = acMontoTotal;
    }
}