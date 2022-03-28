var  employees = [];
employees.prototype = employees.push(Matt,Joe,Kristen);


function Employee(name,jobTitle,salary,status = "Full Time"){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}

Employee.prototype.printEmployeeForm = function(){
    console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Job Status: " + this.status);

}
var Matt = new Employee("Matt","Butcher","3300")
Matt.printEmployeeForm();
var Joe = new Employee("Joe","Farm Worker","4000")
Joe.printEmployeeForm();
var Kristen = new Employee("Kristen","Lawyer","5100","Part Time")
Kristen.printEmployeeForm();
