/** 
 * 01. Promise 构造函数是同步执行的， then是异步执行的
 */

//  var promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve();
//     console.log(2);
//  });

//  promise.then(() => {
//      console.log(3);
//  });

//  console.log(4);  // 1,2,4,3


/**
 * 02. promise有三种状态， pending、fulfilled、rejected。 状态只能由pender -> fulfilled 或者pending -> rejected. 状态一旦确定无法修改。
 * 
 * 
 */

//  const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success');
//     }, 1000);
//  });

//  const promise2 = promise1.then(() => {
//     throw new Error('error reject');
//  });

//  console.log('promise1 >>>', promise1);
//  console.log('promise2 >>>', promise2);

//  setTimeout(() =>{
//     console.log('promise3 >>>', promise1);
//     console.log('promise4 >>>', promise2);
//  }, 2000);


/**
 * 03. 构造函数中的resolve && reject只有第一次有效，多次调用没有任何反应。同时呼应第二条结论，状态一经改变就不能再修改了。
 */
// const promise = new Promise((resolve, reject) => {
//     resolve('success1!!!');
//     reject('error1');
//     resolve('success2!!!');
// });

// promise.then((res) => {
//     console.log(`res >>> ${res}`);
// }).catch((error) => {
//     console.log(`error: ${error}`);
// });


/**
 * 04. Promise可以链式调用，但是每次调用完then或catch后会返回一个新的promise对象
 */
// Promise.resolve(1).then((res) => {
//     console.log(res);
//     return 2;
// }).catch((error) => {
//     return 3;
// }).then((res) => {
//     console.log(res);   // 1, 2
// });


/**
 * 05. Promise中的then与catch可以被多次调用，但是这里构造函数中只执行一次. promise内部状态一经改变，并且有了一个值，那么后续每次调用then或者catch都会直接拿到这个值
 */

//  const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('once');
//         resolve('success');
//     }, 1000);
//  });

//  const start = Date.now();

// promise.then((res)=>{
//     console.log(res, Date.now() - start);       //success 1025
// });

// promise.then((res)=>{
//     console.log(res, Date.now() - start);       //success  1026
// });

/**
 * 06. promise中then或者catch中return出一个Error对象并不会抛出错误，所以不会被后续的catch捕获。
 */
// Promise.resolve()
// .then(() => {
//     // return new Error('error!!!');   // then Error: error!!!! at resolve().then
//     // return Promise.reject( new Error('error!!'));
//     throw new Error('error~~'); // catch Error: error~~
// })
// .then((res) => {
//     console.log(`then>>> ${res}`) ;
// })
// .catch((error) => {
//     console.log(`catch ${error}`);
// });

/**
 * 07. Promise中then或者catch返回的并不是promise本身，否则会造成死循环。
 */
// const promise = Promise.resolve().then((res) => {
//     return promise;
// });
// promise.catch(console.error);


/**
 * 08. then或者catch的参数期望是函数，如果是非函数则会发生值穿透。
 */
// Promise.resolve(1)
// .then(2)
// .then(Promise.resolve(3))
// .then(console.log)      // 1

/**
 * 09. .then可以接受两个参数，一个是处理成功的函数，一个是处理错误的函数。但是第二个处理错误的函数无法捕获到第一个处理成功的函数抛出的异常，但是catch可以捕获到。
 */

// Promise.resolve()
// .then(function success(){
//     throw new Error('error');
// }, function error(err){
//     console.log(`fail01 ${err}`);
// })
// .catch((err) => {
//     console.log(`fail02 ${err}`);   // fail2 error at success(...);
// });

