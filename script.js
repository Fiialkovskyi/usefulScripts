// *****Преобразование обьекта в массив*****
// const scoolsObj = {
//     "Yorktown": 10,
//     "Washington & Lee": 2,
//     "Wakefield": 5
// }

// const scoolsArr = Object.keys(scoolsObj).map(item => (
//     {
//         name: item,
//         wins: scoolsObj[item]
//     }
// ));

// console.log(scoolsArr);



// *****Заменить элемент в массиве*****
// const scoolsArr = ["Yorktown", "Washington & Lee", "Wakefield"];
// const updateValueInArray = (oldValue, newValue, arr) => {
//     return arr.map(item => {
//         return item === oldValue ? newValue : item;
//     })
// }

// const updatedScools = updateValueInArray("Washington & Lee", "Stanford", scoolsArr);

// console.log(updatedScools);



// *****Заменить элемент в массиве обьектов*****
// const schools = [
//     { name: "Yorktown"},
//     { name: "Stratford" },
//     { name: "Washington & Lee"},
//     { name: "Wakefield"}
// ];

// const editName = (oldName, name, arr) => {
//     return arr.map(item => {
//         return item.name === oldName ? ({...item, name}) : item;
//     })
// }

// const updatedScools = editName("Yorktown", "Harvard", schools);
// console.log(updatedScools);


// *****Найти сумму элементов в масиве*****
// const arr = [1, 2, 3, 4, 3, 2, 1];

// const sum = arr.reduce((acc, item) => {
//     return acc + item
// }, 0)

// console.log(sum);


// *****Найти самое большое число в масиве*****
// const arr = [1, 2, 3, 4, 3, 2, 1];

// const max = arr.reduce((acc, cur) => {
//     return acc > cur ? acc : cur;
// })

// console.log(max);



// *****Преобразовать массив в обьект*****
// const colors = [
//     {
//         id: '-xekare',
//         title: "rad red",
//         rating: 3
//     },
//     {
//         id: '-jbwsof',
//         title: "big blue",
//         rating: 2
//     },
//     {
//         id: '-prigbj',
//         title: "grizzly grey",
//         rating: 5
//     },
//     {
//         id: '-ryhbhsl',
//         title: "banana",
//         rating: 1
//     }
// ]

// const hashColors = colors.reduce((hash, {id, title, rating}) => {
//     hash[id] = {title, rating}
//     return hash
// }, {});

// console.log(hashColors);


// const arr = [
//     {name: "React", type: "library", owner: "Facebook"},
//     {name: "Angular", type: "framework", owner: "Google"}
// ]

// const lang = arr.reduce((object, {name, type, owner}) => {
//     object[name] = {type, owner};
//     return object;
// }, {})

// console.log(lang);



// *****Сведение массива с несколькими экземпляра одного и того же значения в массив различных значений*****
// const colors = ["red", "red", "green", "blue", "green"];

// const distinctColors = colors.reduce((distinct, color) => {
//     console.log(Array.isArray(distinct));
//     return distinct.indexOf(color) === -1 ? [...distinct, color] : distinct;
// },[])

// console.log(distinctColors);



// *****Каррирование*****
// const userLog = userName => message => `${userName}: ${message}`;
// const log = userLog('James');
// console.log(log('Go home!!!'));

// const createDomElement = tag => innerText => `<${tag}>${innerText}</${tag}>`;
// const div = createDomElement('div');
// div('Some text');



// *****Рекурсия*****
// const countdown = (count) => {
//     if (count > 0) {
//         console.log(count);
//         countdown(count - 1);
//     } else {
//         console.log(count);
//     }
// }

// countdown(10)

// const countdown2 = (count, fn) => {
//     fn(count);
//     count > 0 ? countdown2(count - 1, fn) : count;
// }

// countdown2(20, count => console.log(count));



// *****Глубокий обход обьекта с целью извлечения вложеного значения*****
// const dan = {
//     type: "person",
//     data: {
//       gender: "male",
//       info: {
//         id: 22,
//         fullname: {
//           first: "Dan",
//           last: "Deacon"
//         }
//       }
//     }
//   }

//   const deepPick = (fields, object={}) => {
//       const [first, ...remaining] = fields.split('.');
//       return (remaining.length) ? deepPick(remaining.join('.'), object[first]) : object[first];
//   }

// console.log(deepPick('data', dan));



// *****Композиция*****
// const compose = (...fns) => {
//     if (fns) {
//         fns.reduce((composed, f) => f(composed), fns)
//     }
// }

// compose(() => console.log(1), () => console.log(2));

