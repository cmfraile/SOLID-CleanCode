type size = undefined|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
interface Product{
    name:string|undefined,
    price:number|undefined,
    size:size
}

class Product {

    public name
    public price
    public size

    constructor({name,price,size}:Product){
        this.name = name;
        this.price = price;
        this.size = size
    }

    public toString(){
        if(this.name == undefined){console.log('El nombre debe de estar definido, como mínimo') ; return };
        return `${this.name} (${this.price}) [${this.size}]`;
    }
}

export const drymain = () => {
    const bluePants = new Product({name:'Vaqueros',price:20,size:undefined});
    console.log(bluePants.toString());
}

//NO USES UN OBJETO PARA INSTANCIAR EL PRODUCTO, SOLO EN ESTA PRACTICA