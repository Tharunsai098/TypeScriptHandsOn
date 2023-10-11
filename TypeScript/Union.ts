

function addMethod( num1: number | string, num2: number | string){
    let result;
    if(typeof num1 === "number"  && typeof num2 === "number"){
        result = num1+num2;
    }else{
        result = num1.toString() + num2.toString();
    }
    return result;
}

const result1 = addMethod(20,30);
console.log(result1);

const result2 = addMethod("man","go");
console.log(result2);