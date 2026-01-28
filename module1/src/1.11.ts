{
  //Ternary Operator
  const age = 19;
  const isAdult = age >= 18 ? "Adult" : "Not Adult";
//   console.log(isAdult);

//Nullish coalescing operator
//Decision based on null or undefined

  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  console.log(result1);
}
