class Car {

    constructor(private brand:string,private numberOfSeats:number){}

    public getBrand(){return this.brand};
    public getNumberOfSeats(){return this.numberOfSeats};

}

const printCarSeats = ( cars:Car[] ) => cars.map(x => { console.log(`Concesionario:[${x.getBrand()}] -> Asientos:[${x.getNumberOfSeats()}]`) });

export const LiskovHomeworkMain = () => {
    const cars = [new Car('Volvo',7),new Car('Toyota',5)];
    printCarSeats( cars );
}

