// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750', //74750
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

//console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//Function that takes in atticus and looks for his employee #, annual salary and reveiw rating


// function calculateBonus () {
  
// }


//Declare each employee (start with just Atticus) as an object that includes 'Name' 'bonusPercentage' 'totalCompensation' 'totalBonus'



// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let bonus = 0;
  if (employee.reviewRating === 3) {
    bonus += .04;
    //console.log (bonus);
  }
  else if (employee.reviewRating === 4){
    bonus += .06;
    //console.log (bonus);
  }
  else if (employee.reviewRating === 5){
    bonus += .1;
    //console.log (bonus);
  }
  if (employee.employeeNumber.length < 5) {
    bonus += .05;
    //console.log (bonus);
  }
  if (employee.annualSalary > 65000) {
    bonus -= .01;
    
  }
  if (bonus > .13) {
    bonus = .13;
  }
  else if (bonus < 0){
    bonus = 0;
  }
  // return new object with bonus results
console.log(bonus);
}
calculateIndividualEmployeeBonus(employees[2]);
