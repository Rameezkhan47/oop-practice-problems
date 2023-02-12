export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other"
}
export class Person {
  private _firstName: string;
  private _lastName: string;
  private _age: number;
  private _gender: Gender;
  private _phoneNumber: string;
  private _CNIC: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender,
    phoneNumber: string,
    CNIC: string
  ) {
    if (age < 18 || age > 60) {
      throw new Error("Age must be between 18 and 60");
    }
    if (CNIC.length !== 13) {
      throw new Error("CNIC must be 13 digits");
    }
    if (phoneNumber.length !== 11) {
      throw new Error("phoneNumber must be 11 digits");
    }

    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._gender = gender;
    this._phoneNumber = phoneNumber;
    this._CNIC = CNIC;
  }

  public get firstName(): string {
    return this._firstName;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public get age(): number {
    return this._age;
  }
  public get gender(): Gender {
    return this._gender;
  }
  public get phoneNumber(): string {
    return this._phoneNumber;
  }
  public get CNIC(): string {
    return this._CNIC;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public set age(value: number) {
    this._age = value;
  }
  public set gender(value: Gender) {
    this._gender = value;
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public set CNIC(value: string) {
    this._CNIC = value;
  }

  public toString(): string {
    return `First Name: ${this.firstName} Last Name: ${this.lastName}, Age: ${this.age}, Gender: ${this.gender}, Phone Number: ${this.phoneNumber}, CNIC: ${this.CNIC}`;
  }
}

// let person = new Person('Rameez', 'Khan', 24, Gender.Male, '03482622889', '4210194956949');
// console.log(person.toString())
// person.firstName = 'Anusha'
// person.lastName = 'Sohail'
// person.age = 25
// person.gender = Gender.Female
// person.phoneNumber= '03482674365'
// console.log(person.toString())