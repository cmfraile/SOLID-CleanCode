type size = 'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
interface product {name?:string|undefined,price?:number|undefined,size?:size|undefined}
class Product {

    private name;
    private price;
    private size;

    constructor({name,price,size}:product){
        this.name = name||undefined;
        this.price = price||undefined;
        this.size = size||undefined;
        //console.log(Object.keys(this));
    }

    private propertiesNonUndefinedCheck(){

        /*
        Object.keys(this).map( (x:string) => {
            if(this[x] == undefined){
                throw new Error(`[${x}] es undefined y por tanto, no pasa el check`);
            }
        })
        */

        for (const key in this){
            if(this[key] == undefined){
                throw new Error(`[${key}] es undefined y por tanto, no pasa el check`);
            }
        }

    }

    public toString(){

        //El problema de DRY (don't repeat yourself) que tenemos aqui, es que para cada método, las lineas de validación se repite en cada método, y eso es código duplicado.
        //if(this.name == undefined){console.log('El nombre debe de estar definido, como mínimo') ; return };

        this.propertiesNonUndefinedCheck();

        return `${this.name} (${this.price}) [${this.size}]`;
    }



}

export const drymain = () => {
    const bluePants = new Product({name:'pantalon',price:20,size:'XXXL'});
    console.log(bluePants.toString());
}