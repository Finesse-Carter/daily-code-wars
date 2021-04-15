// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

function sumMul(n,m){
    let a = []
    let b
    if(n<=0 || m<=0){
      return "INVALID"
    }
     for (let i = n; i < m; i++) {
       if (i%n===0) {
         a.push(i)
         
       b = a.reduce((x,y)=>x+y); 
     }
   }
     return b
   }
   