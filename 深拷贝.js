const old_obj={
    name:'lisi',
    age:'22',
    colors:['red','green','blue'],
    friend:{
        name:'zhangsan'
    }
}
// const new_obj=old_obj
// new_obj.name="shazi"
// console.log(new_obj)
// console.log(old_obj);
function deepClone(obj){
    if(typeof obj!=='object' ||obj==null){
        return obj
    }
    let result
    if(obj instanceof Array){
        result=[]
    }
    else{
        result={}
    }
    for(let key in obj){
        // 不拷贝原型链上的属性
        if(obj.hasOwnProperty(key)){
            result[key]=deepClone(obj[key])
        }
        
    }
    return result
}
const newobj=deepClone(old_obj)
console.log(newobj)
console.log(old_obj);