# Clean Code:

### La deuda técnica de Martin Fowler :

| | Imprudente | Prudente |
|-|-|-
| **Deliberado** | No tenemos tiempo para diseño de software , test unitarios , etc, ... | Debemos de entregar y afrontar las consecuencias. |
| **Inadvertido** | ¿ Que son los patrones de diseño ? ¿ Que es el Clean Code ? | Ya sabemos como debería haberse hecho. |
#### Variables :
- Nombres pronunciables y expresivos :
```javascript
//[badNames]
const cat = 't-shirt';
const ddmmyyyy = 'new Date()';

//[goodNames]
const category = 't-shirt';
const birthDate = new Date();
```
- Nombres con ausencia de información técnica en el nombre :
```javascript
//[badNames]
class abstractUser
interface userInterface

//[goodNames]
class User
interface user
```
> Si el comentario de unas lineas de código debe de describir las variables, el nombre de las mismas es poco descriptivo, y por lo tanto, incorrecto.

#### Nombres según el tipo de dato:
- Arreglos . Deben de ser plurales y descriptivos:
```javascript
//De peor a recomendado:
const fruit = ['manzana','pera','platano'];
const fruitList = """"
const fruits = """"
const fruitsNames = """"
```
- Booleanos . Deben de formular una pregunta afirmativa:
```javascript
const badNames = ['open','write','fruit','active','noValues','noEmpty'];
const goodNames = ['isOpen','canWrite','hasFruit','isActive','hasValues','isEmpty']
```
- Números . Deben de indicar a que valor se refieren y de que:
```javascript
const badNames = ['fruits','cars'];
const goodNames = [['maxFruits','minFruits'],'totalOfCars'];
```
#### Construcción de clases y funciones:
- Funciones :
		- Una función debe de hacer EXACTAMENTE lo que su nombre indica.
		- No emplees mas de 3 parámetros posicionales, y en caso de excederte, emplea un objeto tipado como parámetro.
		- Deben de tener un tamaño reducido.
		- Una función resoluble en una sola linea no es recomendable si es compleja de leer.
		- Debes de buscar que una función tenga menos de 20 lineas, y en caso de superar el excedente, dividir el código en mas  funciones, con diferentes responsabilidades.
		- Evita el "else" y trata de usar ternarios.
```javascript
const badNames = [createUserIfNotExist(),updateUserIfNotEmpty(),sendEmailIfFieldIsValid()];
const goodNames = [createUser(),updateUser(),sendEmail()];
```
> Las funciones deben de formarse con [ Verbo + Sustantivo ] , y recurrir al principio de responsabilidad única para construir el resto del programa con el código en un nivel óptimo de atomización, sujeto al resto de buenas prácticas que conozcamos. Antepón siempre un código facil de leer a eficiente. La máquina aguanta un par de lineas mas, pero una lectura con dificultades es contundente en comparación para el equipo de trabajo.

- Clases:
			- El nombre es lo mas importante de la clase.
			- Formado por un sustantivo o frase de sustantivo.
			- No deben de tener un nombre genérico ( Para no tentar a sobrecargarlo de responsabilidades ).
			- UpperCamelCase.
			- El nombre debe de ser corto y conciso.
	#### 3 preguntas para determinar si el nombre de la clase es correcto:
		- ¿ Que hace exactamente la clase ?
		- ¿ Como hace exactamente la clase una tarea en específico ?
		- ¿ Hay algo específico sobre su ubicación ?
	- Remueve o refactoriza si alguna de estas preguntas presenta problemas para responderse o no tiene sentido su respuesta. Una responsabilidad no significa que haga una sola tarea, si no que se encarge de una sola parte.

- Estandar de construcción de una clase:
```javascript
class Standart(){
	//Lo público se queda mas arriba, y lo privado mas abajo:
	public static properties
	public properties
	static staticConstructors(){}
	constructor(){}
	static methods(){}
	methods(){}
	// Resto de métodos de instancia ordenador de mayor a menor importancia.
	get getters(){}
	set setters(){}
}
```
> Los comentarios responde el por qué, no el que o el como.
### STUPID , antipatrones y code smells:
#### STUPID:
- S_ingleton : El patrón Singleton no es malo per se, y va a seguir siendo la forma de garantizar una única instancia de la clase a lo largo de toda la aplicación, sin embargo los inconvenientes que presenta este patrón son:
	- Vive en el contexto global.
	- Modificable por cualquiera y en cualquier momento.
	- No se puede rastrear.
	- Dificil de testar debido a su ubicación.
- T_ight Coupling : El acoplamiento es el "efecto dominó" causado por el cambio o refactorización de una clase, que obliga a cambiar el funcionamiento de aquellas entidades que consumen sus recursos. Un alto acomplamiento ( es decir, lo que se debe de evitar ). No solo causa el efecto anteriormente citado, si no que traba el resto de ensamblaje del programa y dificulta la capacidad de reutilización de módulos debido a su alta dependencia respecto a donde están construidos.
	- Alta cohesión : La cohesión es la capacidad que tiene un módulo de ceñirse a su propósito. Si la cohesión es baja, significa que el módulo tiene demasiadas responsabilidades. Si es alta, significa que este se ciñe a su responsabilidad. Recuerda que una responsabilidad no significa tener una única tarea.
> Así pues , a la hora de ensamblar un programa, buscas bajo acoplamiento, y alta cohesión de sus partes.
- U_ntestability : Código no probable: El código con alto acoplamiento, dependencias no inyectadas y dependencias en el contexto global ( por el empleo de Singleton, por ejemplo ), no permite realizar sobre tus módulos pruebas unitarias. Evitar estos smells permite que el código se pueda testear.
> Las pruebas deben de estar en mente desde la creación del código. Si no conoces sobre testing, te recomiendo aprender librerias como Jest y familiarizarte con el unit testing. En caso de que actualmente no te fuera posible, construye tu código teniendo en mente la conducta que debe y no debe de tener tu módulo.
> Ejemplo en la vida real de dicho testing: Haces una tortilla, y en el proceso sabes que tienes que batir huevos, y para batir huevos necesitas cascar huevos y verterlos en un bol. Un ejemplo de test seria comprobar que tu programa, al cascar los huevos, estos se vierten en un bol, y no sobre cualquier otra cosa. El testing es algo así como supervisar el trabajo y avisar cuando una acción como "verter los huevos en el bol" se realiza de la forma en la cual el propósito no se erra.
- P_remature optimization : La optimización prematura consiste en anticiparte a los requisitos y desarrollar abstracciones innecesarias que pueden aportar complejidad accidental a nuestro programa. Constrúyelo asumiendo que puedes volver a el y mejorarlo, y que buscar un código perfecto y óptimo desde el comienzo es adelantarse.
	- Complejidad esencial : La complejidad es inherente al problema.
	- Complejidad accidental : La implementación de una solución compleja a la mínima indispensable.
> Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es más importante en una aplicación.
- I_ndescriptible naming : Los nombres poco descriptivos recoge esta serie de smells : Nombres de variables mal nombradas, nombres de clases genéricas, nombres de funciones mal nombradas, ser demasiado o insuficientemente específico ( ser genérico ).
- D_uplication ( o no aplicar el DRY ) : El principio DRY (Don't Repeat Yourself) consiste en evitar duplicar código, ni más, ni menos. Esto permite simplificar los tests y centralizar procesos. Un código duplicado implica hacer dos tests o mas para lo mismo, y en caso de actualizar, ser muy probable que dicha mejora no se replique a otro módulo que la necesita. Dos o mas funciones iguales o muy parecidas se pueden unificar en una con optimizaciones y otro conjunto de parámetros, de los cuales parte de ellos pueden ser optativos o tener valores por defecto.

#### Otros smells:
- Inflación : Realizar funciones o clases con demasiadas responsabilidades va a causar susodichas de gran tamaño y difícil mantenimiento. A la hora de escribir tu código ten una filosofía mas bien atómica, tanto a la hora de hacer pequeños bloques de código como una jerarquía de ficheros que no tenga reparos en hacer ficheros pequeños. La razón es sencilla, piensa al crear código que estas labrando un huerto, con sus cuadrantes de tierra donde plantas las semillas y el código escrito es la germinación, crecimieto, etc, ... Toda la plantación concentrada en una pequeña superficie no va a permitir tener un buen huerto, pues tu mismo no estas cediendo espacio al software que lo necesita. Construye código atómico, pequeño y muy distribuido para que este pueda escalar, crecer y mantener su manejabilidad y lectura constantemente, al contrario de hacinarlo que haria ficheros monstruosos y crípticos. _Divide et impera._
- Obsesión primitiva : Las clases y funciones pueden a llegar a manejar grandes listas de primitivos las cuales a partir de cierto nivel pueden volverse inmanejables no tengas reparos en hacer objetos que aglutinen el "estado" y aquello con lo que trabaja la clase o función en caso de que tu lista de primitivos comience a dilatarse.
- Larga lista de parámetros : No excedas el máximo de 3 parámetros posicionales por función. En caso de excederlo, aporta como parámetro un objeto tipado que recoja todo lo que vas a consumir la función.
- Función envidiosa : Este smell trata de cuando una clase o función para funcionar consume de facto algo de otra función o clase de manera externa. Ofrécelo en el constructor o argumento, en vez de consumirlo a través de un método durante su funcionamiento.
- Intimidad inapropiada : Parecida a la función envidiosa, se consume de facto algo por parte de muchas otras entidades, implicando alto acoplamiento. Refactoriza para proveerlo en la construcción.
- Cadena de mensajes : Esto sucede cuando para una cadena de comunicación, hay un alto acoplamiento por parte de muchas entidades, y un cambio de código o refactorización compromete dicha cadena. Refactoriza para garantizar una comunicación punto a punto y disminuir dicho acoplamiento.
- Middle man : Seria una media solución al smell de cadena de mensajes. No esta mal del todo generar una entidad intermediaria que garantice una comunicación entre componentes, pues una refactorización en esta linea reduce el acoplamiento. El problema esta que tras una implementación con esta solución, ahora una entidad monopoliza la integridad de una comunicación, y un problema de este middle man nos devuelve a una cadena de comunicación ( aunque de menos eslabones ) rota. El Middle man es una solución que esta de paso, pues aunque reduzca la deuda técnica, la solución óptima y final a este problema es dotar a las entidades implicadas una comunicación punto a punto autónoma y que parta de ellas.

[Refactoring guru](https://refactoring.guru/es) Es una web que tiene enésimos ejemplos de patrones y buenas prácticas, las cuales te son conveniente consultar, curiosear, investigar y tratar de aprovechar en tus proyectos.

