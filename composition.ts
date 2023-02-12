// this code explains about the composition in OOP, we will create two classes Date and Employee, Employee class will have its name DOB and Joining Data
// DOB and joining date will be taken from class Date and this will impliment composition

class newDate {
  private year: number;
  private month: number;
  private day: number;

  constructor(day: number, month: number, year: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  getDate() {
    console.log(`${this.day}/${this.month}/${this.year}`);
    return `${this.day}/${this.month}/${this.year}`;
  }

  setYear(year: number) {
    if (year > 1900 && year <= 2023) {
      this.year = year;
    } else {
      throw new Error("Invalid year");
    }
  }
  setMonth(month: number) {
    if (month >= 1 && month <= 12) {
      this.month = month;
    } else {
      throw new Error("Invalid month");
    }
  }
  setDay(day: number) {
    if (day >= 1 && day <= 31) {
      this.day = day;
    } else {
      throw new Error("Invalid day");
    }
  }
  getYear() {
    console.log("Year is", this.year);
  }
  getMonth() {
    console.log("Month is", this.month);
  }
  getDay() {
    console.log("Day is", this.day);
  }
}

class Employee {
  private static count: number = 0;
  private firstName: string;
  private lastName: string;
  private birthDate: newDate;
  private hireDate: newDate;

  constructor(
    firstName: string,
    lastName: string,
    birthDate: newDate,
    hireDate: newDate
  ) {
    Employee.count++
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.hireDate = hireDate;
  }

  static getCount(){
    console.log("Employee object count: ", Employee.count)
    return Employee.count
  }

  getDetails() {
    console.log(
      `${this.firstName} ${
        this.lastName
      } is born on ${this.birthDate.getDate()} and is hired on ${this.hireDate.getDate()}`
    );
  }
}

let hireDate = new newDate(22, 11, 2021);
let birthDate = new newDate(1, 11, 1997);

Employee.getCount()
let employee1 = new Employee("Rameez", "Khan", birthDate, hireDate);
employee1.getDetails();
Employee.getCount()
