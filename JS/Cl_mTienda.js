export default class Cl_mTienda{
    constructor(){
        this.acMontoTotal = 0.0;
        this.acCantA = 0.0;
        this.acCantB = 0.0;
        this.acCantC = 0.0;
    }
    procesarCliente(c){
        this.acMontoTotal += c.calcMontoPagar();
        if (c.codProducto === "A")
            this.acCantA += c.cantidad;
        else if(c.codProducto === "B")
            this.acCantB += c.cantidad;
        else
            this.acCantC += c.cantidad;
    }
    productoMayorVenta(){
        if (this.acCantA === this.acCantB && this.acCantA === this.acCantC)
            return "los Productos A, B y C";
        else if (this.acCantA === this.acCantB && this.acCantB > this.acCantC)
            return "los Productos A y B";
        else if (this.acCantA === this.acCantC && this.acCantC > this.acCantB)
            return "los Productos A y C";
        else if (this.acCantB === this.acCantC && this.acCantC > this.acCantA)
            return "los Productos B y C";
        else if (this.acCantA > this.acCantB && this.acCantA > this.acCantC)
            return "el Producto A";
        else if (this.acCantB > this.acCantA && this.acCantB > this.acCantC)
            return "el Producto B";
        else 
            return "el Producto C";
    }
    devolverMontoTotal(){
        return this.acMontoTotal;
    }
}