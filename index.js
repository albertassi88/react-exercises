const arrayProducts = [2, 4, 6, 8, 10, 12, 14, 16]; 


//Find
function find(number) { //retorna o valor do primeiro elemento que satisfaz a função.
    return arrayProducts.find((element) => element === number);
}
console.log(find(8)); //8
 

//Filter
function filter(number) { //cria um novo array com a condição informada na função.
    return arrayProducts.filter((element) => element > number);
}
console.log(filter(4)); //[ 6, 8, 10, 12, 14, 16 ]
 

//Concat
function concat(array) { //junta dois ou mais arrays.
    return arrayProducts.concat(array);
}
console.log(concat([100, 200])); //[ 2, 4, 6, 8, 10, 12, 14, 16, 100, 200 ]
 

//Every
function every(number) { //testa se todos os elementos do array satisfaz a condição informada.
    return arrayProducts.every(element => element >= number);
}
console.log(every(2)); //true
 

//FindIndex
function findIndex(number) { //retorna o índice do primeiro elemento encontrado.
    return arrayProducts.findIndex((element) => element === number);
}
console.log(findIndex(10)); //4
 

//ForEach
function forEachElements(element, index) { //retorna uma dada função em cada elemento de um array.
    console.log(`${index} - ${element}`);
}
arrayProducts.forEach(forEachElements); //0-2, 1-4, 2-6, 3-8, 4-10, 5-12, 6-14, 7-16
 

//Includes
function includes(number) { //retorna true ou false se um array contém um determinado elemento.
    return arrayProducts.includes(number);
}
console.log(includes(2)) //true
 

//Join
function join() { //junta todos os elementos de um array em uma string com algum caractere caso queira.
    return arrayProducts.join("/");
}
console.log(join()) //2/4/6/8/10/12/14/16
 

//LastIndexOf
function lastIndexOf(number) { //retorna o último índice encontrado no array, o array é pesquisado de trás para frente.
    return arrayProducts.lastIndexOf(number);
}
console.log(lastIndexOf(14)) //6
 

//Map
function map() { //retorna um novo array com cada elemento informado.
    return arrayProducts.map(element => element);
}
console.log(map()) //[ 2, 4, 6, 8, 10, 12, 14, 16 ]
 

//Reducer 1
function reducer1() { //executa uma função para cada elemento do array, resultando num único valor de retorno.
    return arrayProducts.reduce((cc, element) => {
        return cc + element;
    }, 0);
}
console.log(reducer1()); //72
 

//Reducer 2
let nomes = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
function reduce2() { //executa uma função para cada elemento do array, resultando num único valor de retorno.
    return nomes.reduce((todosNomes, nome) => {
        if (nome in todosNomes) {
            todosNomes[nome] ++;
        }else {
            todosNomes[nome] = 1;
        }
        return todosNomes;
    }, {});
}
console.log(reduce2()); //{ Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }
 

//Reverse
function reverse() { //invert os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
    const array = [1, 2, 3, 4, 5, 6];
    return array.reverse();
}
console.log(reverse()); //[ 6, 5, 4, 3, 2, 1 ]
 

//Shift
const array1 = [1, 2, 3, 4, 5, 6]; //remove o primeiro elemento de um array e retorna esse elemento.
const array2 = array1.shift();
console.log(array1); //[ 2, 3, 4, 5, 6 ]
console.log(array2); //1
 

//Unshift
const array1 = [1, 2, 3, 4, 5, 6]; //adiciona um ou mais elementos no início de um array e retorna o tamanho do elemento.
const array2 = array1.unshift(0);
console.log(array1); //[ 0, 1, 2, 3, 4, 5, 6 ]
console.log(array2); //7
 

//Slice
function slice() { //retorna uma cópia de parte de um array a partir das posições informadas de início e fim.
    const array = [1, 2, 3, 4, 5, 6];
    return array.slice(2, 4);
}
console.log(slice()); //[ 3, 4 ]
 

//Some
function some(num) { //testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna true ou false.
    return arrayProducts.some(element => element > num);
}
console.log(some(4)); //true
 

//Sort
function sort() { //ordena os elementos por números do próprio array e retorna o array.
    return arrayProducts.sort((a, b) => a - b);
}
console.log(sort()); //[ 2, 4, 6, 8, 10, 12, 14, 16 ]
 

//Splice
const array3 = [2,  4,  6,  8, 10, 12, 14, 16]; //altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
const splice = () => array3.splice(2, 1);
console.log(splice()); //[ 6 ]
console.log(array3); // [ 2, 4, 8, 10, 12, 14, 16 ]
 

//Substring
const string = 'banana'; //retorna a parte da string entre os índices inicial e final.
const string2 = string.substring(string.length - 4);
console.log (string2); //nana
 

//Split
const nome = "José Carlos de Souza"; //O objetivo do método split() é dividir uma string.
const resultado = nome.split(" ", 2);
console.log(resultado); //[ 'José', 'Carlos' ]
 

//Replace
const string = 'Vamos estudar Script'; //O método replace() usa dois parâmetros específicos e retorna uma nova string.
const novaString = string.replace('Script','Java');
console.log(novaString); //Vamos estudar Java
 

//Trim
const string = '   foo  1'; //retorna o texto sem espaços em branco no início e/ou fim da string.
console.log(string.trim()); //'foo'
console.log(string.trimEnd()); //'   foo'
console.log(string.trimLeft()); //'foo'
console.log(string.trimRight()); //'   foo'
console.log(string.trimStart()); //'foo'
 

//StartsWith
const string = 'Saturday night plans'; //Determina se uma string começa com os caracteres especificados, retornando true ou false.
console.log(string.startsWith('Sat')); //true
 



//**** Extras **** 


const array = [1, 2, 3, 4];
console.log(array[array.length - 1]); //última posição do array.


//Retorna números iguais
function numerosIguais(numbers) {
    return numbers.filter((element, index) => {
        return numbers.indexOf(element) !== index;
    });
}
console.log(numerosIguais([1,3,5,6,6,5])); // [6,5]
