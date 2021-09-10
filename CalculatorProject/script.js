// menampilkan number yang ditekan ketika tombol ditekan
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value);
    });
});

// menyimpan angka-angka dan operator untuk melakukan kalkulasi
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

// menambah click event ke operator tombol-tombol
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0'
}

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

// mengaktifkan fungsi kalkulasi ke aplikasi calculatornya
const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});

// membuat tombol AC berjalan dengan lancar
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

// membuat aplikasi dapat mengkalkulasi angka desimal
const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    } else {
        currentNumber += dot
    }
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

// menjalankan fungsi tombol persen
const inputePercentage = () => {

}

const percentageBtn = document.querySelector('.percentage')

percentageBtn.addEventListener('click', () => {
    currentNumber = currentNumber
})