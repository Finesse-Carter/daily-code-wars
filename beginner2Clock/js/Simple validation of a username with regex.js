/**Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included). */

function validateUsr(username) {
    res = /^[a-z0-9_]{4,16}$/.test(username)
      return res
  }

  function validateUsr(username) {
    if (username.length < 4 || username.length > 16)
      return false;
      
    return /^([a-z0-9_])+$/.test(username);
  }