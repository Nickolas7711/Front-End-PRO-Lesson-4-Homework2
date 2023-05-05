// debugger;
document.write('<h3><b>Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).</b></h3>');
value = 20;

while (value <= 30) {
    document.write(`${value} `);
    value += 0.5;
}

document.write('<h3><b>Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.</b></h3>');
valueDollars = 10;
resultCalculation = '';

while (valueDollars <= 100) {
    resultCalculation = valueDollars * 27;
    document.write(`${valueDollars} (usd) x 27 = ${resultCalculation} (uah)<br>`);
    valueDollars += 10;
}

document.write('<h3><b>Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.</b></h3>');
givenNumber = 100;
variable = 1;
numberSquare = '';

do {
  if (variable * variable <= givenNumber) {
    numberSquare += variable + ', ';
    }
    variable++;
} while (variable <= 100);
document.write(numberSquare.slice(0, -2));

document.write('<h3><b>Дане ціле число. З\'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).</b></h3>');
numberRequest = +prompt('Enter a prime number!');
valuePrime = 2;
resultPrime = true;

while (!numberRequest || isNaN(parseInt(numberRequest))) {
    numberRequest = +prompt('Enter a prime number!');
}

do {
    if (numberRequest % valuePrime === 0 && valuePrime !== numberRequest || numberRequest === 1) {
        resultPrime = false;
    }
    valuePrime++;
} while (valuePrime < numberRequest);

if (resultPrime) {
    document.write(`Число ${numberRequest} є простим числом.`);
} else {
    document.write(`Число ${numberRequest} не є простим числом.`);
}

document.write('<h3><b>Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).</b></h3>');
degreNumber = 1;

do {
    degreNumber++;
    resultDegre = Math.pow(3, degreNumber);
} while (resultDegre < numberRequest);

if (resultDegre == numberRequest) {
    document.write(`Число ${numberRequest} можна отримати шляхом зведення числа 3 у ступінь ${degreNumber}.`);
} else {
    document.write(`Число ${numberRequest} неможливо отримати шляхом зведеня числа 3 у деякий ступень.`);
}