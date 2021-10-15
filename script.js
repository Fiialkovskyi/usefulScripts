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