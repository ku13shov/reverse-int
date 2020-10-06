module.exports = function reverse (n) {
  let mod = Math.abs(n);
  let rev;
  rev = String(mod).split('').reverse().join('');
  return rev;  
}
