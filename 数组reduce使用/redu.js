arr = [1,2,3,4]
// temp代表传入的参数
// value代表当前数组中的值
// value代表当前数组中的值的下标
// arr代表当前数组

let result = arr.reduce((temp,value,index,arr)=>{
    // 必须有返回值
    return temp+value
},0)
console.log(result)