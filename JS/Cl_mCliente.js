export default class Cl_mCliente{
    constructor({cedula, codProducto, cantidad}){
        this.cedula = cedula;
        this.codProducto = codProducto;
        this.cantidad = cantidad;
    }
    set cedula(c){
     this._cedula = c;
    }
    get cedula(){
        return this._cedula;
    }
    set codProducto(cP){
        this._codProducto = cP.toUpperCase();
    }
    get codProducto(){
        return this._codProducto;
    }
    set cantidad(can){
        this._cantidad = +can;
    }
    get cantidad(){
        return this._cantidad;
    }
    calcMontoPagar() {
        if (this.codProducto === "A")
            return 10 * this.cantidad;
        else if(this.codProducto === "B")
            return 5 * this.cantidad;
        else
            return 20 * this.cantidad;
    }
    
}