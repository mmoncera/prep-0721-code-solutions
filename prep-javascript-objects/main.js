var person = {
  firstName: 'Michael',
  lastName: 'Moncera',
  hobby: 'Martial Arts'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log("This person's name is: " + fullName + '.');

person.job = 'Student';

console.log("This person's current job is: " + person.job + '.');

person.previousJob = 'Martial Arts Instructor';

console.log("This person's previous job is: " + person.previousJob + '.');

console.log(person);
