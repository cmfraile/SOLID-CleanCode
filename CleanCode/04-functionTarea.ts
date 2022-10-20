export const homework4 = () => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    const isRedFruit = (fruit:string) =>
    ['manzana','cereza','ciruela'].includes(fruit);

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    /* [X] MI FORMA :
    const getFruitsByColor = ( color: string ):string[] => {
        //ES IGUAL DE VALIDO RESOLVERLO POR SWITCH:
        if(color === 'red') return ['manzana','fresa'];
        if(color === 'yellow') return ['piña','banana'];
        if(color === 'purple') return ['moras','uvas'];
        throw Error('El color debe de ser red, yellow o purple');
    } */

    //Forma del profe:
    type FruitColor = 'red'|'yellow'|'purple';
    const getFruitsByColor = (color:FruitColor):string[] => {
        const fruitsByColor = {
            red: ['manzana','fresa'],
            yellow:['piña','banana'],
            purple:['moras','uvas']
        };
        if(!Object.keys(fruitsByColor).includes(color)){return []} //o throw
        return fruitsByColor[color];
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    const workingSteps = ():string => {
        if(!isFirstStepWorking){return '1º ROTO'};
        if(!isSecondStepWorking){return '2º ROTO'};
        if(!isThirdStepWorking){return '3º ROTO'};
        if(!isFourthStepWorking){return '4º ROTO'};
        return "TODO BIEN";
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


};




