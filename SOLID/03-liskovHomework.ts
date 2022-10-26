class Car {

    //En principio deberian venir las propiedades que indican cosas como si es eléctrico, o no, entre otros.
    constructor(private brand:string,private numberOfSeats:number){}

    public getBrand(){return this.brand};
    public getNumberOfSeats(){return this.numberOfSeats};

}

/*
abstract class Vehicle { abstract getNumberOfSeats():number };
class Audi extends Vehicle {
    constructor(private numberOfSeats:number){super()};
    getNumberOfSeats(): number { return this.numberOfSeats };
const prinCarSeats = (cars:Vehicle[]) => { cars.forEach(x => {...}) }
}
*/

const printCarSeats = ( cars:Car[] ) => cars.map(x => {
    console.log(`Concesionario:[${x.getBrand()}] -> Asientos:[${x.getNumberOfSeats()}]`);
});

export const LiskovHomeworkMain = () => {
    const cars = [new Car('Volvo',7),new Car('Toyota',5)];
    printCarSeats( cars );
}

