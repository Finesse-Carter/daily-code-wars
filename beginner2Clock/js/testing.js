// function findShort(s){
//     let a = s.split(' ');
//     let b = a.sort(function(a, b){return a.length - b.length});
//     console.log(b[0].length);

// }
// findShort("bitcoin take over the world maybe who knows perhaps");
// findShort("turns out random test cases are easier than writing out basic ones");

function invert(array) {
    //console.log(array);
    let b = [];
    let v = array.join(' ')
    console.log(v);

    // let a = array.map(b=>console.log(b));
    v = ~v + 1; 
    console.log(v);

 }

invert([1,-2,3,-4,5])
let g =5
g = ~g + 1; 
    console.log(g);

// [0]
//   [-1,2,-3,4,-5]
//  []
let x = [1,-2,3,-4,5]
let v = x.join(' ')
v.split(' ')
console.log(typeof v);
console.log(v);