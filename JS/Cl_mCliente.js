export default class Cl_mCliente{
    constructor({cedula, codProducto, cantidad, productoA, productoB, productoC}){
        this.cedula = cedula;
        this.codProducto = codProducto;
        this.cantidad = cantidad;
        this.productoA = productoA;
        this.productoB = productoB;
        this.productoC = productoC; 
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
    set productoA(pA){
        this._productoA = +pA;
    }
    get productoA(){
        return this._productoA;
    }
    set productoB(pB){
        this._productoB= +pB;
    }
    get productoB(){
        return this._productoB;
    }
    set productoC(pC){
        this._productoC = +pC;
    }
    get productoC(){
        return this._productoC;
    }
    calcMontoPagar() {
        if (this.codProducto === "A")
            return this.cantidad * this.productoA;
        else if(this.codProducto === "B")
            return this.cantidad * this.productoB;
        else
            return this.cantidad * this.productoC;
    }
   
    
}