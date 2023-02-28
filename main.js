function first_task() {
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!");
}
first_task();

function fourteenth_task(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(fourteenth_task(4, 26, 17));

function seventh_task(x, y, z) {
  return x * y * z;
}
let result = seventh_task(5, 2, 9);
console.log(result); 