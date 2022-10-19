(() => {

    // arreglo de temperaturas celsius : [X] const arrayOfNums = [33.6, 12.34];
    const celsiusTemperaturesList = [33,12];

    // Dirección ip del servidor : [X] const ip = '123.123.123.123';
    const ServerIp = '123.123.123.123';

    // Listado de usuarios : [X] const people = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    const userList = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios : [X] const emails = people.map( u => u.email );
    const emailListOfUsers = userList.map( user => user.email ); // [V] const userEmails;

    // Variables booleanas de un video juego
    /* [X]
    const jump = false;
    const run = true;
    const noTieneItems = true;
    const loading = false;
    */

    const state = { isJumping:false , isRunning:true , haveItems:true , isLoading : false };

    // Otros ejercicios
    // tiempo inicial : [X] const start = new Date().getTime();
    const startTimeEvent = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final : [X] const end = new Date().getTime() - start;
    const endTimeEvent = new Date().getTime() - startTimeEvent;


    // Funciones
    // Obtiene los libros
    // [X] function book() {throw new Error('Function not implemented.'); }
    function getBooks(){};

    // obtiene libros desde un URL
    // [X] function BooksUrl( u: string) { throw new Error('Function not implemented.'); }
    function getBooksByUrl(url:string){return getBooks()};
    
    // obtiene el área de un cuadrado basado en sus lados
    // [X] function areaCuadrado( s: number ) {throw new Error('Function not implemented.'); }
    function getSquareArea(sidelength:number){}

    // imprime el trabajo
    // [X] function printJobIfJobIsActive() {throw new Error('Function not implemented.'); }
    function printJob(){};

    //Si tras hacer el ejercicio, eliminar su comentario permite entenderlo, los nombres son correctos.
    
})();




