/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum COR_FAVORITA {
  VERMELHO = "vermelho",
  LARANJA = "laranja",
  AMARELO = "amarelo",
  VERDE = "verde",
  AZUL = "azul",
  ANIL = "anil",
  VIOLETA = "violeta"
}

type TPerson2 = {
  name: string,
  idade: number,
  corFavorita: COR_FAVORITA
}

const pessoa1: TPerson2 = {
  name: "Leo",
  idade: 35,
  corFavorita: COR_FAVORITA.VERDE
}

const pessoa2: TPerson2 = {
  name: "Nena",
  idade: 35,
  corFavorita: COR_FAVORITA.VIOLETA
}

const pessoa3: TPerson2 = {
  name: "Véia",
  idade: 61,
  corFavorita: COR_FAVORITA.AZUL
}

const pessoa4: TPerson2 = {
  name: "Véio",
  idade: 65,
  corFavorita: COR_FAVORITA.VERDE
}


const ArrayPessoas: TPerson2[] = [
  pessoa1,
  pessoa2,
  pessoa3,
  pessoa4
]

console.log(ArrayPessoas);
