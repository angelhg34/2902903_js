const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});
const PI = Math.PI;


function calcular() {
  reader.question('Digite la opcion que desea 1-22 (1-8 operadores) (9-15 condicionales) (16-22 Ciclos): ', (option) => {
    option = parseInt(option);//cambiar valor a entero
    if (isNaN(option) || option < 1 || option == 22) { // si la opcion no es numerica o no cumple con la condicion
      console.error('Opción no válida. Digite una opción del 1 al 11.');
      return calcular();
    }
    switch (option) {
      case 1:
        // Calcular Area Triangulo
        reader.question('Digite la altura: ', (x) => {
          reader.question('Digite la base: ', (y) => {
            const result = parseFloat(x) * parseFloat(y) / 2;
            console.log(`El resultado de la suma es: ${result}`);
            calcular();
          });
        });
        break;
      case 2:
        // Suma
        reader.question('Digite el primer número: ', (x) => {
          reader.question('Digite el segundo número: ', (y) => {
            const result = parseFloat(x) + parseFloat(y);
            console.log(`El resultado de la suma es: ${result}`);
            calcular();
          });
        });
        break;
      case 3:
        // Elevar al cuadrado
        reader.question('Digite el numero a elevar: ', (x) => {
            const result = parseFloat(x) * parseFloat(x);
            console.log(`El cuadrado de ${parseFloat(x)} es: ${result}`);
            calcular();

        });
        break;
      case 4:
        // convertir dolar a euro

        reader.question('Digite los dolares a convertir ', (x) => {
          const convert = parseFloat(x) * 1.09;
          console.log(`Los dolares ${parseFloat(x)} equivalen a ${convert} euros`);
          calcular();

      });
        break;
      case 5:
        // Area y perimetro de un cuadrado
        reader.question('Digite la longitud del lado del cuadrado ', (x) => {
            const result = parseFloat(x) * parseFloat(x) *  parseFloat(x) * parseFloat(x);
            const result2 = parseFloat(x) + parseFloat(x) +  parseFloat(x) + parseFloat(x);
            console.log(`El resultado del Area del cuadrado es: ${result}`);
            console.log(`El resultado del Perimetro es: ${result2}`);
            calcular();

        });
        break;
      case 6:
        // area y volumen de un cilindro
        reader.question('Digite la altura del cilindro: ', (x) => {
        reader.question('Digite el radio del cilidnro: ', (y) => {
        const result = (2 * PI * parseFloat(y) * parseFloat(x)) + (2 * PI * parseFloat(y) * parseFloat(y));
        const result2 = PI * (parseFloat(y) * parseFloat(y)) * parseFloat(x);
          console.log(`El area del cilindro es: ${result} y el volumen es ${result2} `);
          calcular();
        });
      });
        break;
      case 7:
        // hallar longitud y area de una circunferencia
        reader.question('Digite el radio: ', (x) => {
          const result = 2 * PI * parseFloat(x) ;
          const result2 = PI * (parseFloat(x) * parseFloat(x));
          console.log(`La longitud del circulo es ${result} el area del circulo inscrito es ${result2}`);
          calcular();
        });
        break;
      case 8:
        // Promedio de 3 notas
        reader.question('Digite la primera nota: ', (x) => {
        reader.question('Digite la segunda nota: ', (y) => {
        reader.question('Digite la tercera nota: ', (z) => {
        const prom = (parseFloat(x) + parseFloat(y) + parseFloat(z)) / 3;
        console.log(`El promedio de las 3 notas es: ${prom}`);
        calcular();
          });
          });
      });
        break;
      case 9:
        // identificar numero positivo y negativo
        reader.question('Digite un numero: ', (x) => {
          if (parseFloat(x) < 0 ){
            console.log("El numero ingresado es negativo");
          }
          else if (parseFloat(x) == 0){
            console.log("El numero ingresado es neutro");
          }
          else{
            console.log("El numero ingresado es positivo");
          }
            calcular();
          });
        break;
        case 10:
  // Logaritmo base 10
        reader.question('Digite un numero: ', (x) => {
        reader.question('Digite un segundo numero: ', (y) => {
          if (parseFloat(x) > parseFloat(y) ){
            console.log(`${parseFloat(x)} es el numero mayor y ${parseFloat(y)} es el numero menor` ) ;
          }
          else {
            console.log(`${parseFloat(y)} es el numero mayor y ${parseFloat(x)} es el numero menor` ) ;

          }
            calcular();
          });
      });
        break;
        case 11:
          // Logaritmo base 10
                reader.question('Digite un numero: ', (x) => {
                reader.question('Digite un segundo numero: ', (y) => {
                reader.question('Digite un segundo numero: ', (z) => {

                  if (parseInt(x) > parseInt(y) && parseInt(y) > parseInt(x) && parseInt(x) > parseInt(z) && parseInt(z) > parseInt(x) && parseInt(z) > parseInt(y) && parseInt(y) > parseInt(z)){
                    console.log(`${parseInt(x)} es el numero mayor y ${parseInt(y)} es el numero menor` ) ;
                  }
                    calcular();
                  });     
              });
            });
            break;
        case 99:
          // Salir
          console.log('¡Hasta luego!');
          reader.close();
          break;
        default:
          console.error('Opción no válida. Digite una opción del 1 al 11.');
          calcular();
            }
          });
        }
        calcular();