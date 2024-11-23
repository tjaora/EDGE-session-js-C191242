//let arr1=[1, 2, 3] arr2=[4, 5, 6] => get output 1.[arr1, arr2] 2.[arr1, ...arr2] 3.[...arr1, ...arr2]

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr3 = [arr1, arr2]
console.log("arr1, arr2:   "+ arr3);

console.log(
    [arr1, arr2]
);

console.log(
    [arr1, ...arr2]
);

console.log(
    [...arr1, ...arr2]
);
