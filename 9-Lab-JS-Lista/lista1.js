// Questão 1 Função
function verificaArray(array){
    return Array.isArray(array);
}

// Questão 1 Arrow
const isArray = (array) => Array.isArray(array);

// Questão 2
const cloneArray = (array) => [...array];

// Questão 3
const getNFirstElementsOfArray = (array, n = null) => {
  if (n) {
    return array.slice(0, n);
  } else {
    return array[0];
  }
};

// Questão 4
const getNLastElementsOfArray = (array, n = null) => {
  if (n) {
    return array.slice(-n);
  } else {
    return array.slice(-1);
  }
};

// Questão 5
const conatenateArrayInString = (array) => array.join();

// Questão 6
const isEven = (number) => number % 2 === 0;

function toNumber(value) {
  return Number(value);
}

const putHifenBetweenEveryEvenNumberPairs = (number) => {
  const numberAsString = number.toString(); // '123'
  let numberAsArray = numberAsString.split(""); // [1, 2, 3]
  numberAsArray = numberAsArray.map(toNumber);
  const arrayLength = numberAsArray.length;
  const arrayCopy = [...numberAsArray];
  let count = 0;

  for (let i = 1; i < arrayLength; i++) {
    if (isEven(numberAsArray[i])) {
      if (isEven(numberAsArray[i - 1])) {
        arrayCopy.splice(i + count, 0, "-");
        count += 1;
      }
    }
  }

  return arrayCopy;
};

// Questão 7
const getElementsFrequencies = (frequencies) => {
  const elementsCount = Object.entries(frequencies);

  let majorCount = 0;
  let majorElement = "";
  elementsCount.forEach((element) => {
    let elementName = element[0];
    let elementCount = element[1];

    if (elementCount > majorCount) {
      majorCount = elementCount;
      majorElement = elementName;
    }});

  return [majorElement, majorCount];
};

const getTheMostFrequentElement = (array) => {
  // Retorna na forma: [nome do elemento mais frequente, frequência do elemento]
  const frequencies = {};
  array.map((element) => {
    if (element in frequencies) frequencies[element] += 1;
    else {
      frequencies[element] = 1;
    }});

  return getElementsFrequencies(frequencies);
};

// Questão 8
const removeDuplicates = (array) => {
  array.map((element, index) => {
    if (typeof element == "string") {
      array[index] = element.toLowerCase();
    }
  });
  return [...new Set(array)];
};

// Questão 10
const mergeArrays = (vetorPilha, vetorAdd) => [
  ...vetorPilha,
  ...vetorAdd,
];

// Main de testes
console.log(`--- Questão 1 Função ---\n${verificaArray([1, 2, 3, 4, 5])}\n${verificaArray({ nome: "Iara" })}` );

console.log(`--- Questão 1 Arrow ---\n${isArray([1, 2, 3, 4, 5])}\n${isArray({ nome: "Iara" })}`);

console.log(`--- Questão 2 --- \n${cloneArray([1, 2, 3, 4])}`);

console.log(`--- Questão 3 PASSANDO N --- \n${getNFirstElementsOfArray(
    [1, 2, 3, 4, 5],
    (n = 2))}`);

console.log(`--- Questão 3 SEM PASSAR N --- \n${getNFirstElementsOfArray([1, 2, 3, 4, 5,])}`);

console.log(`--- Questão 4 PASSANDO N --- \n ${getNLastElementsOfArray(
    [1, 2, 3, 4, 5],
    (n = 5))}`);

console.log(`--- Questão 4 SEM PASSAR N --- \n${getNLastElementsOfArray([1, 2, 3, 4, 5])}`);

console.log(`--- Questão 5 ---\n${typeof conatenateArrayInString([1, 2, 3, 4, 5])}`
);

console.log(`--- QUESTÃO 6 ---\n${putHifenBetweenEveryEvenNumberPairs(1223445566)}`);

console.log(`--- QUESTÃO 7 --- \n${getTheMostFrequentElement([1, 1, 1, 1, 1, 2, 3, 4, 5, 6,])}`);

console.log(
  `--- QUESTÃO 8 --- \n${removeDuplicates([
    1,
    "Java",
    "Javascript",
    "javaScript",
    "jaVa",
    "JavaSscript",
    1,
    2,
    3,
    4,
    4,
    5,
    6,
  ])}`);

console.log(
  `--- QUESTÃO 10 --- \n${mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])}`);
