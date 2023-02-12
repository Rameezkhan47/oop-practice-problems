import { Person, Gender } from "./Person";

export class CommissionEmployee extends Person {
  private _grossSales: number;
  private _commissionRate: number;

  

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender,
    phoneNumber: string,
    CNIC: string,
    grossSales: number,
    commissionRate: number
  ) {
    super(firstName, lastName, age, gender, phoneNumber, CNIC);
    if (grossSales < 0) {
      throw new Error("grossSales must be greater than 0");
    }
    if (commissionRate < 0 || commissionRate > 1) {
        throw new Error("commissionRate must be between 0 and 1");
  }
  this._grossSales = grossSales;
  this._commissionRate = commissionRate;
}

public get grossSales(): number {
  return this._grossSales;
}

public get commissionRate(): number {
  return this._commissionRate;
}

public set grossSales(grossSales: number) {
  if (grossSales < 0) {
    throw new Error("grossSales must be greater than 0");
  }
  this._grossSales = grossSales;
}
public set commissionRate(commissionRate: number) {
  if (commissionRate < 0 || commissionRate > 1) {
    throw new Error("commissionRate must be between 0 and 1");
  }
  this._commissionRate = commissionRate;
}

public earnings(){
  return this.grossSales * this.commissionRate
}

//@override

public toString(): string {
  return `${super.toString()} Gross Sales: ${this.grossSales} Commission Rate: ${this.commissionRate}`;
}

}

// let employee = new CommissionEmployee('Rameez', 'Khan', 24, Gender.Male, '03482622889', '4210194956949', 30, 0.6)
// console.log(employee.toString())

// employee.firstName = 'Anusha'
// employee.lastName = 'Sohail'
// employee.age = 25
// employee.gender = Gender.Female
// employee.phoneNumber = '03482674365'
// employee.CNIC = '9999999999999'
// employee.grossSales = 100
// employee.commissionRate = 0.2

// console.log(employee.toString())







