// t1
// for (let i = 0; i<10; i++){
//     console.log('hahah',i);  
// }
// console.log(i);  // referenceError i is not defined;


// t2
// for (const i = 0; i<10; i++){
//     console.log('hahah',i);  // typeError: Assignment to constant variable. 
// }

// 变量提升
// var声明的变量允许先调用，后声明；
// const、let必须要先声明才可以执行调用，否则会报错；
console.log(a);
var a = 1;


// 块级作用域
// 1. 防止内层变量覆盖外层变量
var tmp = new Date();

function f () {
    console.log(tmp);
    if (false) {
        var tmp = 'Hello world';
    }
}
// f();  // undefined

// 2. 用来计数的循环变量泄露为全局变量;
var s = 'hello';

for (var i = 0; i < s.length; i++) {
    // console.log(s[i]);
}
// console.log(i);  // 5  循环结束后，i未消失，泄露成了全局变量
 
// 3. let为js新增了块级作用域

function f2(){
    let n = 5;
    if(true) {
        let n = 10;
    }
    console.log(n);
}

// f2();  // 5 外层变量不受内层代码块中的影响

function f3 () {
    console.log('I am outside!');
}
(function(){
    if(false){
        function f3(){
            console.log('I am inside!!!');
        }
    }
    // f3();  // typeError: f3 is not a function
})()


// const
// 1. const 声明的变量指向的是内存地址所保存的数据不变, 针对复合类型的数据要特别小心，指针是固定的，但是数据结构可能会变

/** 
 * 
    const foo = {};
    foo.prop = 123;
    console.log(foo.prop);  // 123
    foo = {};  // typeError: Assignment to constant variable;
*/
/** 
    const arr = [];
    arr.push('Hello');  // 可执行
    arr.length = 0;     // 可执行
    arr = ['world'];    // 重新赋值会报错 typeError: Assignment to constant variable
*/
/** 
    const foo = Object.freeze({});
    foo.prop = 123;  // 常规模式下，不会执行； 严格模式下会报错
    console.log(foo);
*/