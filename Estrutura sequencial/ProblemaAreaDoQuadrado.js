/*
Fazer um programa para ler três medidas A, B e C. Em seguida, calcular e mostrar (imprimir os dados 
com quatro casas decimais): 
a) a área do quadrado que tem lado A 
b) a área do triângulo retângulo que base A e altura B 
c) a área do trapézio que tem bases A e B, e altura C 


ENTRADA:
Digite a medida A: 4.0
Digite a medida B: 3.5
Digite a medida C: 5.2

SAIDA:
AREA DO QUADRADO = 16.0000 
AREA DO TRIANGULO = 7.0000 
AREA DO TRAPEZIO = 19.5000 
*/

var medidaA =  4;
var medidaB = 3.5;
var medidaC = 5.2;

areaQuadrado = Math.pow(medidaA,2)
areaTriangulo = (medidaA*medidaB)/2
areaTrapezio = ((medidaA+medidaB)*medidaC)/2

console.log(`AREA DO QUADRADO = ${areaQuadrado}`)
console.log(`AREA DO TRIANGULO = ${areaTriangulo}`)
console.log(`AREA DO TRAPEZIO = ${areaTrapezio}`)