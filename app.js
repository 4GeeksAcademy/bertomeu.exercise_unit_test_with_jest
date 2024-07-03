// Esta es mi función que suma dos números
const sum = (num1, num2) => {
    return num1 + num2
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Declaramos una función con el nombre exacto "formDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor de dólares a euros y de euros a yenes
    let valueInYen = valueInDollar / 1.07 * 156.5;
    // Retornamos el valor en yenes
    return valueInYen
}
// Declaramos una función con el nombre exacto "formYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor de yenes a euros y de euros a libras
    let valueInPound = valueInYen / 156.5 * 0.87;
    // Retornamos el valor en libras
    return valueInPound
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }