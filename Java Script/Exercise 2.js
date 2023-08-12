//Exercise-2
// Question 1
//1.Write a program in javascript to define a function that accepts customer argument and display its details.

function displayCustomers(name,age)
{
    console.log(name,":",age);

}

displayCustomers("cheetan",21);

// Question 2
//2.Write a program in Javascript to define a function that accepts customer array argumentand display its details in comma separate value .
// call the function later and store result in result variable and print it 

function displayCustomers(customers) {
    let result = "";
  
    for (let i = 0; i < customers.length; i++) {
      const customer = customers[i];
      result += customer.username + customer.age;
      if (i < customers.length - 1) {
        result += ",";
      }
    }
  
    return result;
  }
  
  const exampleInput = [
    { username: "chetan", age: 22 },
    { username: "panka", age: 23 }
  ];
  
  const result = displayCustomers(exampleInput);
  console.log(result);

