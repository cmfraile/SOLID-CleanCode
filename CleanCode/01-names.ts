(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    // [X] const fs = [{ id: 1, f: false },{ id: 2, f: true }];
    const filesToEvaluate = [{id:1,flagged:false},{id:2,flagged:true}];
    
    // Archivos marcados para borrar - files to delete
    // [X] const arhivos = fs.map( f => f.f );
    const filesToDelete = filesToEvaluate.map( filesToDelete => filesToDelete.flagged );

    // Malos nombres:
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today : [X] const ddmmyyyy = new Date();
    const today:Date = new Date();
    
    // días transcurridos - elapsed time in days : [X] const d: number = 23;
    const elapsedTimeInDays:number = 23;
    
    // número de archivos en un directorio - number of files in directory : [X] const dir = 33;
    const filesInDirectory:number = 33;
    
    // primer nombre - first name : [X] const nombre = 'Fernando';
    const firstName:string = 'Carlos';

    // primer apellido - last name : [X] const apellido = 'Herrera';
    const lastName:string = 'Fraile';

    // días desde la última modificación - days since modification : [X] const dsm = 12;
    const daysSincePatch:number = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student : [X] const max = 6;
    const classMaximunAmountPerStudent:number = 6;


})();

/*
NOTAS:
- Si el comentario de un código previo a este es describir sus atributos, el nombre de los atributos no es correcto (críptico, poco descriptivo,...)
*/



