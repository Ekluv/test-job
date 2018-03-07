/**
 * Write a class (prototype) in JavaScript, with at least one method, and another class which
 * extends the previous class. Make sure that when an instance is created of the latter, it returns
 * true for an instanceof-check for both prototypes and that the method on the first prototype can 
 * be invoked. 
 */

function User(name, email, mobileNo) {
  this.name = name;
  this.email = email;
  this.mobileNo = mobileNo;
}

User.prototype.getName = function() {
  return `Name:${this.name}`
}

function Employee(name, email, mobileNo, designation) {
  User.call(this, name, email, mobileNo);
  this.designation = designation;
}

function inherits(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
}

inherits(Employee, User);

const user = new User('name', 'samplemail@test.com', '999999999');
const employee = new Employee('name', 'samplemail@test.com', '999999999', 'Developer');
console.log(employee.getName());
console.log(employee instanceof User);
