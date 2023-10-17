/*Escribe en un módulo propio, una función llamada strictEquals(a, b)
 que devuelva el mismo valor que a === b. Tu implementación no puede usar los operadores
  === ni !==. Testea la función desde otro fichero con este set de pruebas:
Dada la función strictEquals
Cuando se comparan <A> y <B>
Entonces el resultado será <Result>*/

const strictEquals = (a, b) => {
  const result = Object.is(a, b);
  return result;
};
console.log(strictEquals(1, 2));
