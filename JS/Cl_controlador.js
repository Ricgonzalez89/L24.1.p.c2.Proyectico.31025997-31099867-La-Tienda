import Cl_mCliente from "./Cl_mCliente.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_mComplemento from "./Cl_mComplemento.js";
import Cl_vCliente from "./Cl_vCliente.js";
import Cl_vTienda from "./Cl_vTienda.js";
import Cl_vComplemento from "./Cl_vComplemento.js";

export default class Cl_controlador {
    constructor () {
        this.vComplemento = new Cl_vComplemento(this);
        this.mComplemento = null;
        this.mTienda = null;
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
            productoA: this.mComplemento.precioA,
            productoB: this.mComplemento.precioB,
            productoC: this.mComplemento.precioC
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

    agregarPrecio({proA, proB, proC}) {
        this.mComplemento = new Cl_mComplemento({proA, proB, proC});
        this.mTienda = new Cl_mTienda({
            precioA: this.mComplemento.precioA, 
            precioB: this.mComplemento.precioB, 
            precioC: this.mComplemento.precioC
        });
        this.vComplemento.ocultar();
        this.mostrarVistaTienda();
    }
}