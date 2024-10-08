import Cl_mCliente from "./Cl_mCliente.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vCliente from "./Cl_vCliente.js";
import Cl_vTienda from "./Cl_vTienda.js";

export default class Cl_controlador {
    constructor () {
         let precioA = prompt ('Ingrese el precio del producto A');
         let precioB = prompt ('Ingrese el precio del producto B');
         let precioC = prompt ('Ingrese el precio del producto C');
        this.mTienda = new Cl_mTienda({precioA, precioB, precioC});
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

    agregarCliente (cedula, codProducto, cantidad) {
        let cliente = new Cl_mCliente({
            cedula: cedula, 
            codProducto: codProducto, 
            cantidad: cantidad,
            productoA: this.mTienda.productoA,
            productoB: this.mTienda.productoB,
            productoC: this.mTienda.productoC
        });
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