/**Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

Similar to those kinda names we need to initialize the names.

See the pattern below:

initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama 
Complete the function initials. */

function initials(n){
    return n = n.split(' '), n.map(function(w,i){
      return w[0].toUpperCase() + (i<n.length-1 ? '':w.slice(1))
    }).join(".")
  }