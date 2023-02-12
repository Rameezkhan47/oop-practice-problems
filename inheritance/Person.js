"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Other"] = "Other";
})(Gender = exports.Gender || (exports.Gender = {}));
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, gender, phoneNumber, CNIC) {
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
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            this._gender = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "phoneNumber", {
        get: function () {
            return this._phoneNumber;
        },
        set: function (value) {
            this._phoneNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "CNIC", {
        get: function () {
            return this._CNIC;
        },
        set: function (value) {
            this._CNIC = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.toString = function () {
        return "First Name: ".concat(this.firstName, " Last Name: ").concat(this.lastName, ", Age: ").concat(this.age, ", Gender: ").concat(this.gender, ", Phone Number: ").concat(this.phoneNumber, ", CNIC: ").concat(this.CNIC);
    };
    return Person;
}());
exports.Person = Person;
// let person = new Person('Rameez', 'Khan', 24, Gender.Male, '03482622889', '4210194956949');
// console.log(person.toString())
// person.firstName = 'Anusha'
// person.lastName = 'Sohail'
// person.age = 25
// person.gender = Gender.Female
// person.phoneNumber= '03482674365'
// console.log(person.toString())
