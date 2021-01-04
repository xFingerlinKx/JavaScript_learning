// literal arrays
// массивы рекомендуется создавать с помощью литералов, а не конструктора
let colors;
colors = [
    'белый',
    'черный',
    'пользовательский'
];

let el = document.getElementById('colors');
el.textContent = colors[0];

let numColors = colors.length

// arrays constructor
// для извлечения данных из массива служит метод item() - индекс элемента указывается в скобках
let colors = new Array('белый', 'черный', 'пользовательский')
let el = document.getElementById('colors');
el.innerHTML = colors.item(0);