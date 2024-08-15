// You are to create a collection of employee's information for your company. Each employee has the following attributes: Name, Salary, Job Title, Status

// First, you will create an empty array named `employees`

// Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.

// This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.

// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

// You will then:
// 1. Instantiate three employees
// 2. Override the status attribute of one of them to either "Part Time" or "Contract"
// 3. Call the `printEmployeeForm` method for each employee
// 4. Put the generated employees into the `employees` array using whichever method you prefer.

const employees = []

function Employee(name, salary, jobTitle, status) {
    this.name = name;
    this.salary = salary;
    this.jobTitle = jobTitle;
    this.status = "Full Time";
}

Employee.prototype.printEmployeeForm = function() {
    console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status)
}

const bill = new Employee("Bill", "$25/hour", "Graphic Designer")
bill.status = "Contract"
const maggy = new Employee("Maggie", "$150/hour", "Travel Nurse")
const taylor = new Employee("Taylor", "$75/hour", "Freelance Web Designer")

bill.printEmployeeForm()
maggy.printEmployeeForm()
taylor.printEmployeeForm()

employees.push(bill)
employees.push(maggy)
employees.push(taylor)

console.log(employees)
