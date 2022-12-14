(() => {

    //TAREA : Cambia el nombre de las funciones de modo que el comentario que lo describe no sea necesario:

    // función para obtener información de una película por Id
    // [X] function getAllMovies( movieId: string ){ console.log({ movieId }) }
    function getMovieById(movieID:string){};

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    // [X] function getAllMovieActors( id: string ){ console.log({ id }) }
    function getMovieCastByMovieId(movieID:string){};

    // funcion para obtener el bio del actor por el id
    // [X] function getUsuario( ActorId: string ){ console.log({ ActorId }) }
    function getBioByActorId(actorID:string){};
    
    // Crear una película
    /* [X]
    function movie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    } */
    interface movie { title:string , description:string , rating:number , cast:string[] }
    function movie(movie:movie){console.log({...movie})};
    function movie2({title,description,rating,cast}:movie){console.log({title,description,rating,cast})};

    /* Crea un nuevo actor
    [X] function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    } */

    function createActor(actor:any){}

    // CONTINUACION : DETALLES ADICIONALES SOBRE FUNCIONES :

    /* [X]
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    } */

    interface employeeCondiciton {isDead:boolean,isSeparated:boolean,isRetired:boolean};
    const getPayAmount = ({isDead = false , isSeparated = true , isRetired = false}:employeeCondiciton):number =>
    /*
    (isDead) ? 1500 :
    (isSeparated) ? 2500 :
    (isRetired) ? 3000 : 4000
    */
    {
        if(isDead)return 1500;
        if(isSeparated)return 2500;
        //if(isRetired){return 3000};return 4000}
        return isRetired ? 3000 : 4000
    }

})();




