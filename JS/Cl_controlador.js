import Cl_mCliente from "./Cl_mCliente.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vCliente from "./Cl_vCliente.js";
import Cl_vTienda from "./Cl_vTienda.js";

export default class Cl_controlador {
    constructor () {
        this.mTienda = new Cl_mTienda();
        this.vCliente = new Cl_vCliente(this);
        this.vTienda = new Cl_vTienda(this);
    }

    mostrarVistaCliente () {
        this.vCliente.mostrar();
        this.vTienda.ocultar();
    }

    mostrarVistaTienda () {
        this.vCliente.ocultar();
        this.vTienda.mostrar();
    }

    agregarCliente ({cedula, codProducto, cantidad}) {
        let cliente = new Cl_mCliente({cedula, codProducto, cantidad});
        this.mTienda.procesarCliente(cliente);
        this.vTienda.reportarCliente({
            cedula: cliente.cedula,
            codProducto: cliente.codProducto.toUpperCase(),
            cantidad: cliente.cantidad,
            montoPagar: cliente.calcMontoPagar().toFixed(2),
            acMontoTotal: this.mTienda.devolverMontoTotal().toFixed(2),
            productoMayorVenta: this.mTienda.productoMayorVenta()
        });
        this.mostrarVistaTienda();
    }
}