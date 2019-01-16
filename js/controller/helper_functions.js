// Rounding function.
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

// Shorthand console.log
function clog(x) {
  console.log(x);
}
