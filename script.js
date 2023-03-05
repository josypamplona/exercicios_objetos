let student = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskill: 'Ótimo',
  };
  ///// Array com as entradas
   
let entries = Object.entries(student);
console.log(entries);
console.log(entries [2]);
console.log(entries[2][0]);
  


  /// array com as chaves
let keys = Object.keys(student);
  console.log(keys);////// arrey de chaves [ 'html', 'css', 'javascript', 'softskill' ]
console.log(keys[0]);/// retorna somente uma chave no caso voltou //  html //

   
  /// Array com os valores
let values = Object.values(student);///arrey de valores [ 'Muito Bom', 'Bom', 'Ótimo', 'Ótimo' ]
   console.log(values);
 
  
 

  //////////////////////////////////////////////////////////// ojetct entries
  
  let countries = {
    franca: 'Paris',
    brasil: 'Brasília',
    espanha: 'Madrid',
    portugal: 'Lisboa',
  };
  let pairKeyValue = Object.entries(countries);
  console.log(pairKeyValue);
  /////object key
  let coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    author: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
  for (let key in coolestTvShow) {
    console.log(key);
  }
  
  // name
  // genre
  // author
  // favoriteCharacter
  // quote
  // seasons
  
  
  
  
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  
  let values = Object.values(info);
  console.log('bem-vinda, ');
  console.log(values[0]);
  console.log('Bem-vinda, ' + info.personagem)///maneira correta Bem-vinda, Margarida

  ////////   object     velius ///////////////////////////////////////////


  let coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
  for (let key in coolestTvShow) {
    console.log(coolestTvShow[key]);
  }
  
  // BoJack Horseman
  // adult animation
  // Raphael Bob-Waksberg
  // Princess Carolyn
  // Princess Carolyn always lands on her feet.
  // 6,
 ///////////////////////////////////////////////////////////////////////////////////////////
 //EXERCICIO CHAVE
 /////Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e 
 //o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave']
 // = valor. Então, o valor esperado no console é:
 
 let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
 
info.recorrente = 'sim';/// assim adicionou a propiedade //recorrente ='sim'; ao objeto
console.log(info);

  /////////objecti entries
  let coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
  console.log(Object.entries(coolestTvShow));
  
  // [
  //   [ 'name', 'BoJack Horseman' ],
  //   [ 'genre', 'adult animation' ],
  //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
  //   [ 'favoriteCharacter', 'Princess Carolyn' ],
  //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
  //   [ 'seasons', 6 ]
  // ]
  
  
  
  ///////////objective assign
  let person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  let info = {
    age: 23,
    job: 'engenheiro',
  };
  
  let family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)//// assing foi usado pra adiocionar (person)
  console.log(person)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////// for 
    //Faça um for/in que mostre todas as chaves do objeto. O valor esperado no console é:

    let info = {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      recorrente: 'Sim',
    };
    
    for (let key in info) {
      console.log(info[key]);
    }
    
    ////////MOSTRAR VALORES////
    //Faça um novo for/in, mas agora mostre todos os valores
    // das propriedades do objeto. O valor esperado no console é:

    let info = {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      recorrente: 'Sim',
    };

    let info2 = {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      recorrente: 'Sim',
    };
    for (let key in info) {
      if(
        key === 'recorrente'&&
        info[key]==='sim'&&
        info2[key]=== 'sim'
      ){
        console.log('Ambos recorrentes');
      } else { console.log(info[key] + ' e ' + info2[key]);
    }
      }/// nesse caso os valores se espelharam. 

   ///////////////////////////////////outro exercicio
   let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };   
console.log(
  'O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo +'"'
      );
  
 // “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

/// adiciona um elemento num arrey
leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });
console.log(leitor.livrosFavoritos);
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + 'livros favoritos');


////////////////////////////////////////////////////////////////////////////////

//vc esta trabalhando numa escola e precisa organizar as lições 
let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

let allLessons = Object.assign({}, {lesson1,lesson2,lesson3});///para colocar os objetos em um só objeto , 
//e chamala - los mais abaixo.

function getStudentsTotal(lessons){
  let total = 0;///para receber o resultado total;
////podira tamben acessar o objeto de alessons = alessons.lessons1.numero+ alessons2.numero +
//+ alessons.lessons3.numero
  let keys = Object.keys(lessons);/// para acessar a chaves dos arreis prepostos em alllessons
for (let index = 0; index < keys.length; index +=1){
  total += lessons[keys[index]].numeroEstudantes;
}
return total;
}
console.log(getStudentsTotal(allLessons));

////////////////////////////////////////////////////////////////////////////////////////////

| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
let numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};
function romanoParaDecimal(numero) {
  numero = numero.toLowerCase();
  let len = numero.length;
  let soma = numerosRomanos[numero[len - 1]];
  let atual = numerosRomanos[numero[len - 1]];

  for (let i = 2; i <= len; i += 1) {
    let prox = numerosRomanos[numero[len - i]];

    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }

    atual = prox;
  }

  return soma;
}

console.log(romanoParaDecimal('MMXVIII')); // 2018
console.log(romanoParaDecimal('VI')); // 6
console.log(romanoParaDecimal('IV')); // 4


/////////// produre os numeros pares e adiciona em um novo arrey

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arrayOfNumbers (vector){
  let result = [];
  for(let index = 0; index < vector.length; index +=1){
    let numbers = vector[index];
for(let indexSub = 0; indexSub < numbers.length; indexSub += 1){
  let current = numbers[indexSub];
  if ((current % 2)===0) {
result.push(current);
}
     }
    }
return result;
}


console.log(arrayOfNumbers(vector)); ///[ 2, 4, 6, 8, 10 ]
console.log(arrayOfNumbers(vector));

//////////////////////////////////////////////////////////////////////////

let basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

let result ={

}
for (let index = 0; index < basket.length; index += 1) {
  let fruit = basket[index];
  if (!result[fruit]) result[fruit] = 0;
  result[fruit] += 1;
}
let summaries = [];
for (fruit in result) {
  let message = `${result[fruit]} ${fruit}`;
  if (result[fruit] > 1) message += 's';
  summaries.push(message);
}
console.log(`Sua cesta possui: ${summaries.join(' ')}.`);

///Com base no objeto a seguir, faça o que se pede.
let moradores = {
  blocoUm: [
    {
      nome: 'Luíza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};
let moradoresBlocoDois = moradores.blocoDois;
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];
console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois.nome + ' ' 
+ ultimoMoradorBlocoDois.sobrenome + ' mora no ' + ultimoMoradorBlocoDois.andar
+ '° andar, apartamento ' + ultimoMoradorBlocoDois.apartamento);

for (let index = 0; index < moradores.blocoUm.length; index += 1) {
 console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
}