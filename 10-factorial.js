function factorial(n) {
  if (isNAN(n) || n < 0) return 1;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
const n = parseInt(process.argv[2]);
console.log(factorial(n));
