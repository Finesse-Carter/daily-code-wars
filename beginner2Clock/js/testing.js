function findShort(s){
    let a = s.split(' ');
    let b = a.sort(function(a, b){return a.length - b.length});
    console.log(b[0].length);

}
findShort("bitcoin take over the world maybe who knows perhaps");
findShort("turns out random test cases are easier than writing out basic ones");