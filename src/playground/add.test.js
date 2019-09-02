const add = (a, b) => a + b ;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`

test("should add two numbers", () => {
  const result = add(5, 6);

  //   if (result !== 11){
  //       throw new Error(`you added 5 and 6. The result was ${result}. Expected 11`);
  //   }
  expect(result).toBe(11);
});

test("should add Name to Greeting", ()=> {
    const result = generateGreeting("Petr");
    expect(result).toBe("Hello Petr!");
});

test("should generate greeting for no name", ()=>{
    const result = generateGreeting();
    expect(result).toBe("Hello Anonymous!");
});
