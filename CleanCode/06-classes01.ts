type gender = 'M'|'F';
interface person {name:string,gender:gender,birthdate:Date};
class Person {

    public name:string;
    public gender:gender;
    public birthdate:Date;

    constructor({name,gender,birthdate}:person){
        this.name = name;
        this.gender = gender;
        this.birthdate = birthdate;
        console.log(this);
    }

}

export const classes01main = () => {
    const persona = new Person({name:'Carlos',gender:'M',birthdate:new Date('1993-03-19')})
}