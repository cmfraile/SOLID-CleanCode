// EJERCICIO PARA APLICAR EL PRINCIPIO DE LA RESPONSABILIDAD UNICO.
// HAY QUE ANTEPONER LA COMPOSICIÓN A LA HERENCIA.

type gender = 'M'|'F';
interface person {name:string,gender:gender,birthdate:Date};
interface user {email:string,role:string,lastAccess?:Date};
interface usersettings {workingDirectory:string,lastFolder:string};

interface userBundle {person:person,user:user,usersettings:usersettings};
interface userBundleProps {name:string,gender:gender,birthdate:Date,email:string,role:string,workingDirectory:string,lastFolder:string}

class Person {

    public name
    public gender
    public birthdate

    constructor({name,gender,birthdate}:person){
        this.name = name;
        this.gender = gender;
        this.birthdate = birthdate;
    }

}

class User {
    
    public email
    public role
    public lastAccess

    constructor({email,role}:user){
        this.email = email;
        this.role = role;
        this.lastAccess = new Date();
    }

    public checkCredentials(){return true};

}

//Este entramado viola el principio de responsabilidad única:
class UserSettings {

    public workingDirectory;
    public lastFolder;

    constructor({workingDirectory,lastFolder}:usersettings){
        this.workingDirectory = workingDirectory;
        this.lastFolder = lastFolder;
    }

}

class UserBundle {
    
    public person:person;
    public user:user;
    public userSettings:usersettings;

    constructor({name,gender,birthdate,email,role,workingDirectory,lastFolder}:userBundleProps){
        this.person = new Person({name,gender,birthdate});
        this.user = new User({email,role});
        this.userSettings = new UserSettings({workingDirectory,lastFolder});
        console.clear();
        console.log(this);
    }

}

export const classes02main = () => {
    //const persona = new Person({name:'Carlos',gender:'M',birthdate:new Date('1993-03-19')});
    new UserBundle({
        name:'Carlos',
        gender:'M',
        birthdate:new Date('1993-03-19'),
        email:'carlos@correo.es',
        role:'admin',
        workingDirectory:'carpeta',
        lastFolder:'carpeta'
    })
}