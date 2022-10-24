type gender = 'M'|'F';
interface person {name:string,gender:gender,birthdate:Date};
interface user extends person {email:string,role:string,lastAccess?:Date};
interface usersettings extends user {workingDirectory:string,lastFolder:string};

class Person {

    public name
    public gender
    public birthdate

    constructor({name,gender,birthdate}:person){
        this.name = name;
        this.gender = gender;
        this.birthdate = birthdate;
        console.log(this);
    }

}

class User extends Person {
    
    public email
    public role
    private lastAccess

    constructor({name,gender,birthdate,email,role}:user){
        super({name,gender,birthdate});
        this.email = email;
        this.role = role;
        this.lastAccess = new Date();
        console.log(this);
    }

    public checkCredentials(){return true};

}

//Este entramado viola el principio de responsabilidad única:
class UserSettings extends User {

    public workingDirectory;
    public lastFolder;

    constructor({name,gender,birthdate,email,role,workingDirectory,lastFolder}:usersettings){
        super({name,gender,birthdate,email,role,lastAccess:new Date()});
        this.workingDirectory = workingDirectory;
        this.lastFolder = lastFolder;
        console.log(this);
    }

}

export const classes01main = () => {
    //const persona = new Person({name:'Carlos',gender:'M',birthdate:new Date('1993-03-19')});
    const configuracionDeUsuario = new UserSettings({
        name: 'Carlos',
        gender:'M',
        birthdate:new Date('1993-03-19'),
        email:'carlos@correo.com',
        role:'admin',
        workingDirectory:'fichero',
        lastFolder:'fichero'
    });
}