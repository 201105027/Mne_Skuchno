let count = prompt("Сколько раз хочешь?");

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

for (let i = 0; i < count; i++) {
  alert(fibonacci(i));
  console.log(
    fibonacci(i)
  );
}
fibonacci(n)