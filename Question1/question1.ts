function f(n: number) {
  for (let i: number = 0; i < n; i++) {
    const digit: number = i + 1;

    if (digit % 3 === 0 && digit % 5 === 0) console.log("fizzbuzz");
    else if (digit % 3 === 0) console.log("fizz");
    else if (digit % 5 === 0) console.log("buzz");
    else console.log(digit.toString());
  }
}

f(15);
