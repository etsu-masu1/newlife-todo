// console.log("Hallo Welt");

// class MyClass {
//     sayHello(msg){
//         console.log('hello!', msg)
//     }
// }

// const myInstance = new MyClass()

// myInstance.sayHello('yuichi');

// function sayHello(msg){
//     console.log('hallo!', msg)
// }
// sayHello('zeigen')
const tasks = []

let taskInputForm = document.getElementById("newTodoInput");
let addTodo = document.getElementById("addTodo");
console.log(addTodo);
// https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/change_event
// taskInputForm.addEventListener('change', (e) => {
//     console.log('user input:', e.target.value)
// })

addTodo.addEventListener('click', () => {
    alert('clicked')
})

