const objectProducts = [
    {id: 1, Product: "Casa", Preco: 1500000},
    {id: 2, Product: "Caneta", Preco: 1},
    {id: 3, Product: "Sapato", Preco: 210},
    {id: 4, Product: "Camisa", Preco: 90},
    {id: 5, Product: "Celular", Preco: 1200},
    {id: 6, Product: "Telefone", Preco: 800},
    {id: 7, Product: "Casa", Preco: 100},
]
 

//Find
function find(id) { //retorna o valor do primeiro elemento que satisfaz a função.
    return objectProducts.find((element) => element.id === id);
};
console.log(find(4)); //{ id: 4, Product: 'Camisa', Preco: 90 }
 

//Filter
function filter(number) { //cria um novo array com a condição informada na função.
    return objectProducts.filter((element) => element.Preco <= number);
}
console.log(filter(90)); //[{ id: 2, Product: 'Caneta', Preco: 1 }, { id: 4, Product: 'Camisa', Preco: 90 }]

 
//Concat
function concat(array) { //junta dois ou mais arrays de objetos.
    return objectProducts.concat(array);
}
console.log(concat([{id: 100, Product: "Janela", Preco: 450}])); //......
 

//Every
function every(number) { //testa se todos os elementos do array satisfaz a condição informada.
    return objectProducts.every(element => element.Preco >= number);
}
console.log(every(2)); //false
 

//FindIndex
function findIndex(number) { //retorna o índice do primeiro elemento encontrado.
    return objectProducts.findIndex((element) => element.Preco === number);
}
console.log(findIndex(1200)); //4
 

//ForEach
function forEachElements(element, index) { //retorna uma dada função em cada elemento de um objeto.
    console.log(`${index} - ${element.Product} - ${element.Preco}`);
}
objectProducts.forEach(forEachElements); //0-Casa - 1500000 ........
 

//Map
function map() { //retorna um novo array com cada elemento informado.
    return objectProducts.map(element => element.Product);
}
console.log(map()); //[ 'Casa', 'Caneta', 'Sapato', 'Camisa', 'Celular', 'Telefone', 'Casa' ]
 

//Reducer 1
function reducer1() { //executa uma função para cada elemento do array, resultando num único valor de retorno.
    return objectProducts.reduce((cc, element) => {
        return cc + element.Preco;
    }, 0);
}
console.log(reducer1()); //1502401
 

//Reverse
function reverse() { //invert os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
    const object = [{id:1}, {id:2}, {id:3}, {id:4}];
    return object.reverse();
}
console.log(reverse()); //[ { id: 4 }, { id: 3 }, { id: 2 }, { id: 1 } ]
 

//Shift
const object1 = [{id:1}, {id:2}, {id:3}, {id:4}]; //remove o primeiro elemento de um array e retorna esse elemento.
const object2 = object1.shift();
console.log(object1); //[{ id: 2 }, { id: 3 }, { id: 4 }]
console.log(object2); //{ id: 1 }
 

//Unshift
const object4 = [{id:1}, {id:2}, {id:3}, {id:4}]; //adiciona um ou mais elementos no início de um array e retorna o tamanho do elemento.
const object5 = object4.unshift({id:6});
console.log(object4); //[ { id: 6 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ]
console.log(object5); //5
 

//Slice
function slice() { //retorna uma cópia de parte de um array a partir das posições informadas de início e fim.
    const object = [{id:1}, {id:2}, {id:3}, {id:4}];
    return object.slice(2, 4);
}
console.log(slice()); //[ { id: 3 }, { id: 4 } ]
 

//Some
function some(num) { //testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna true ou false.
    return objectProducts.some(element => element.Preco > num);
}
console.log(some(4)); //true
 

//Sort
function sort() { //ordena os elementos pelo nome do próprio array e retorna o array.
    return objectProducts.sort((a, b) => {
        if (a.Product > b.Product) {
            return 1;
        }
        if (a.Product < b.Product) {
            return -1;
        }       
        return 0;
    });
}
console.log(sort()); //......
 

//Splice
const object3 = [{id:1}, {id:2}, {id:3}, {id:4}]; //altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
const splice = () => object3.splice(2, 1);
console.log(splice()); //[ { id: 3 } ]
console.log(object3); //[ { id: 1 }, { id: 2 }, { id: 4 } ]
 


//**** Extras ****

 
//última posição do object.
const object = [{id:1}, {id:2}, {id:3}, {id:4}];
console.log(object[object.length - 1]); //{ id: 4 }


//exemplo de uso:
const cidades = {
    iacu: {
        nome: 'Iacu',
        cep: "46.860-000",
    },
    itaberaba: {
        nome: 'Itaberaba',
        cep: "46.880-000",
    },
};
console.log(cidades['iacu']) //{ nome: 'Iacu', cep: '46.860-000' }


// Alterar o nome de uma chave de um objeto, dentro de um array
let objeto = [ 
    {
        name: "Debora",
        idade: 15
    },
    {
        name: "Alice",
        cpf: 88
    },
    {
        name: "Mônica",
        idade: 90
    },
]

//Forma 1 de fazer
for (const key of objeto) {
    if (key) {
        key.idade = key.idade || key.cpf        
    }
}
console.log(objeto)  //[{ name: 'Debora', idade: 15 }, { name: 'Alice', cpf: 88, idade: 88 }, { name: 'Mônica', idade: 90 }]

//Forma 2 de fazer abreviado a forma 1
for (const key of objeto) key.idade = key.idade || key.cpf;
console.log(objeto)   //[{ name: 'Debora', idade: 15 }, { name: 'Alice', cpf: 88, idade: 88 }, { name: 'Mônica', idade: 90 }]

//Forma 3 de fazer deletando a chave
for (const key of objeto) {
    if (key) {
        key.idade = key.idade || key.cpf   
        delete key.cpf     
    }
}
console.log(objeto)  //[{ name: 'Debora', idade: 15 }, { name: 'Alice', idade: 88 }, { name: 'Mônica', idade: 90 }]
