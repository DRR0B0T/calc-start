//Элементы формы
const squareInput = document.getElementById('square-input');
const squareRange = document.getElementById('square-range');

// Радиокнопки
const typeReconstructionElements = document.querySelectorAll('input[name="type"]');
const typeBuildingElements = document.querySelectorAll('input[name="building"]');
const roomsElements = document.querySelectorAll('input[name="rooms"]');


//Чекбоксы
const ceilings = document.querySelector('input[name="ceilings"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');


//Базовая цена и элемент для вывода стоимости
const basePricePerMeter = 6000;
const totalPriceElement = document.getElementById('total-price');


// Связка range с текстовым полем
squareRange.addEventListener('input', function() {
    
    squareInput.value = squareRange.value;
})
// Связка текстового поля с range
squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value;
})


const inputs = document.querySelectorAll('input')


//Обходим все инпуты, и если какой-то был изменен, запускаем пересчет стоимости
inputs.forEach(function (item) {
    item.addEventListener('input', calculate);
});

//Функция calculate для пересчета стоимости
function calculate() {
    
// Площадь квартиры
    const square = parseInt(squareInput.value);
    console.log(square);

    // Тип ремонта
    let typeReconstructionConst;
    typeReconstructionElements.forEach (function(item){
            if(item.checked) {
                typeReconstructionConst = parseFloat (item.value);
            }
    })

    //Тип дома
    let TypeBuildingCost;
    typeBuildingElements.forEach(function (item) {
        if (item.checked) {
            TypeBuildingCost = parseFloat(item.value);
        }
    })

    // Количество комнат
    let roomsCost;
    roomsElements.forEach(function (item) {
        if (item.checked) {
            roomsCost = parseFloat(item.value);
        }
    })

    //Доп опции
    const ceilingsCost = ceilings.checked ? parseFloat(ceilings.value) : 1;
    const wallsCost = walls.checked ? parseFloat(walls.value) : 1;
    const floorCost = floor.checked ? parseFloat(floor.value) : 1;
    
    console.log(ceilingsCost);
    console.log(wallsCost);
    console.log(floorCost);

    //Подсчитать общую стоимость
    const totalPrice = basePricePerMeter * square * typeReconstructionCost * TypeBuildingCost * roomsCost * 
    ceilingCost * wallsCost * floorCost;

    const formatter = new Intl.NumberFormat('ru');
    console.log(formatter.format(totalPrice));

    totalPriceElement.innerText = formatter.format(totalPrice);

}


