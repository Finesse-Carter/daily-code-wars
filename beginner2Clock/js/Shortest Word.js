/**Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

const findShort = (s) =>{
    let a = s.split(' ').sort((x, y)=> x.length - y.length);
    return (a[0].length);
}
findShort("bitcoin take over the world maybe who knows perhaps");