// this code explains about the composition in OOP, we will create two classes Date and Employee, Employee class will have its name DOB and Joining Data
// DOB and joining date will be taken from class Date and this will impliment composition
var newDate = /** @class */ (function () {
    function newDate(day, month, year) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    newDate.prototype.getDate = function () {
        console.log("".concat(this.day, "/").concat(this.month, "/").concat(this.year));
        return "".concat(this.day, "/").concat(this.month, "/").concat(this.year);
    };
    newDate.prototype.setYear = function (year) {
        if (year > 1900 && year <= 2023) {
            this.year = year;
        }
        else {
            throw new Error("Invalid year");
        }
    };
    newDate.prototype.setMonth = function (month) {
        if (month >= 1 && month <= 12) {
            this.month = month;
        }
        else {
            throw new Error("Invalid month");
        }
    };
    newDate.prototype.setDay = function (day) {
        if (day >= 1 && day <= 31) {
            this.day = day;
        }
        else {
            throw new Error("Invalid day");
        }
    };
    newDate.prototype.getYear = function () {
        console.log("Year is", this.year);
    };
    newDate.prototype.getMonth = function () {
        console.log("Month is", this.month);
    };
    newDate.prototype.getDay = function () {
        console.log("Day is", this.day);
    };
    return newDate;
}());
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, birthDate, hireDate) {
        Employee.count++;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.hireDate = hireDate;
    }
    Employee.getCount = function () {
        console.log("Employee object count: ", Employee.count);
        return Employee.count;
    };
    Employee.prototype.getDetails = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName, " is born on ").concat(this.birthDate.getDate(), " and is hired on ").concat(this.hireDate.getDate()));
    };
    Employee.count = 0;
    return Employee;
}());
var hireDate = new newDate(22, 11, 2021);
var birthDate = new newDate(1, 11, 1997);
Employee.getCount();
var employee1 = new Employee("Rameez", "Khan", birthDate, hireDate);
employee1.getDetails();
Employee.getCount();
