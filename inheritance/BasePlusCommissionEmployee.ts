import {CommissionEmployee} from './CommissionEmployee'
import { Gender } from './Person'

class BasePlusCommissionEmployee extends CommissionEmployee{
    private _baseSalary: number

    constructor(
        firstName: string,
        lastName: string,
        age: number,
        gender: Gender,
        phoneNumber: string,
        CNIC: string,
        grossSales: number,
        commissionRate: number,
        baseSalary: number
      ){
        super(firstName, lastName, age, gender, phoneNumber, CNIC, grossSales, commissionRate)

        if(baseSalary<0){
            throw new Error('Base salary cannot be negative')
        }
        this._baseSalary = baseSalary

      }
      public get baseSalary(): number{
        return this._baseSalary
      }
      public set baseSalary(baseSalary: number){
        if(baseSalary<0){
            throw new Error('Base salary cannot be negative')
        }
        this._baseSalary = baseSalary
    }
    //@override

    public earnings(){
        return this.baseSalary + super.earnings()
      }
    //@override 

    public toString(): string {
        return `${super.toString()} Base Salary: ${this.baseSalary}`;
      }
        
      }
let employee = new BasePlusCommissionEmployee('Rameez', 'Khan', 24, Gender.Male, '03482622889', '4210194956949', 30, 0.6, 30000)
console.log(employee.toString())
console.log(employee.earnings())

employee.firstName = 'Anusha'
employee.lastName = 'Sohail'
employee.age = 25
employee.gender = Gender.Female
employee.phoneNumber = '03482674365'
employee.CNIC = '9999999999999'
employee.grossSales = 100
employee.commissionRate = 0.2
employee.baseSalary = 50000

console.log(employee.toString())
console.log(employee.earnings())