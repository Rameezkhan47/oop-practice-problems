"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CommissionEmployee_1 = require("./CommissionEmployee");
var Person_1 = require("./Person");
var BasePlusCommissionEmployee = /** @class */ (function (_super) {
    __extends(BasePlusCommissionEmployee, _super);
    function BasePlusCommissionEmployee(firstName, lastName, age, gender, phoneNumber, CNIC, grossSales, commissionRate, baseSalary) {
        var _this = _super.call(this, firstName, lastName, age, gender, phoneNumber, CNIC, grossSales, commissionRate) || this;
        if (baseSalary < 0) {
            throw new Error('Base salary cannot be negative');
        }
        _this._baseSalary = baseSalary;
        return _this;
    }
    Object.defineProperty(BasePlusCommissionEmployee.prototype, "baseSalary", {
        get: function () {
            return this._baseSalary;
        },
        set: function (baseSalary) {
            if (baseSalary < 0) {
                throw new Error('Base salary cannot be negative');
            }
            this._baseSalary = baseSalary;
        },
        enumerable: false,
        configurable: true
    });
    //@override
    BasePlusCommissionEmployee.prototype.earnings = function () {
        return this.baseSalary + _super.prototype.earnings.call(this);
    };
    //@override 
    BasePlusCommissionEmployee.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), " Base Salary: ").concat(this.baseSalary);
    };
    return BasePlusCommissionEmployee;
}(CommissionEmployee_1.CommissionEmployee));
var employee = new BasePlusCommissionEmployee('Rameez', 'Khan', 24, Person_1.Gender.Male, '03482622889', '4210194956949', 30, 0.6, 30000);
console.log(employee.toString());
console.log(employee.earnings());
employee.firstName = 'Anusha';
employee.lastName = 'Sohail';
employee.age = 25;
employee.gender = Person_1.Gender.Female;
employee.phoneNumber = '03482674365';
employee.CNIC = '9999999999999';
employee.grossSales = 100;
employee.commissionRate = 0.2;
employee.baseSalary = 50000;
console.log(employee.toString());
console.log(employee.earnings());
