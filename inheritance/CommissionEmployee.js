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
exports.CommissionEmployee = void 0;
var Person_1 = require("./Person");
var CommissionEmployee = /** @class */ (function (_super) {
    __extends(CommissionEmployee, _super);
    function CommissionEmployee(firstName, lastName, age, gender, phoneNumber, CNIC, grossSales, commissionRate) {
        var _this = _super.call(this, firstName, lastName, age, gender, phoneNumber, CNIC) || this;
        if (grossSales < 0) {
            throw new Error("grossSales must be greater than 0");
        }
        if (commissionRate < 0 || commissionRate > 1) {
            throw new Error("commissionRate must be between 0 and 1");
        }
        _this._grossSales = grossSales;
        _this._commissionRate = commissionRate;
        return _this;
    }
    Object.defineProperty(CommissionEmployee.prototype, "grossSales", {
        get: function () {
            return this._grossSales;
        },
        set: function (grossSales) {
            if (grossSales < 0) {
                throw new Error("grossSales must be greater than 0");
            }
            this._grossSales = grossSales;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommissionEmployee.prototype, "commissionRate", {
        get: function () {
            return this._commissionRate;
        },
        set: function (commissionRate) {
            if (commissionRate < 0 || commissionRate > 1) {
                throw new Error("commissionRate must be between 0 and 1");
            }
            this._commissionRate = commissionRate;
        },
        enumerable: false,
        configurable: true
    });
    CommissionEmployee.prototype.earnings = function () {
        return this.grossSales * this.commissionRate;
    };
    //@override
    CommissionEmployee.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), " Gross Sales: ").concat(this.grossSales, " Commission Rate: ").concat(this.commissionRate);
    };
    return CommissionEmployee;
}(Person_1.Person));
exports.CommissionEmployee = CommissionEmployee;
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
