//  遍历器
/** 
 * 对象 
 * for-in 循环用来遍历键名
 * for-of 遍历普通对象键会报错，可以使用Object.keys(obj)将对象的键名生成一个数组, 遍历找个数组
 */

 let o1 = {
     a: 1,
     b: 2,
 }

 let arr = [1,2,3];

for(let item in o1) {
    console.log(item); // a, b 
}

// for(let i in arr) {
//     console.log('arr>>>', i);  //
// }

// for(var key of Object.keys(o1)) {
//     console.log(key + ': ' + o1[key]);   // a: 1, b:2
// }
// for(let item of o1) {
//     console.log('for-of', item); // TypeError: o1[Symbol.iterator] is not a function
// }



