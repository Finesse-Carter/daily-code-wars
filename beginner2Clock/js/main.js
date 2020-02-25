// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make 'Past' function which returns time converted to milliseconds.
// 2/23/2020
function past(h, m, s){
if(0 <= h <= 23,0 <= m <= 59, 0 <= s <= 59){
return (h*=3600000)+(m*=60000)+(s*=1000);
}
}
