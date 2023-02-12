var Time = /** @class */ (function () {
    function Time(time) {
        if (time instanceof Time) {
            this.hours = time.hours;
            this.minutes = time.minutes;
            this.seconds = time.seconds;
        }
        else {
            this.hours = time.hours || 0;
            this.minutes = time.minutes || 0;
            this.seconds = time.seconds || 0;
        }
    }
    Time.prototype.getTime = function () {
        console.log("".concat(this.hours, ":").concat(this.minutes, ":").concat(this.seconds));
    };
    Time.prototype.getHours = function () {
        console.log(this.hours);
    };
    Time.prototype.getMinutes = function () {
        console.log(this.minutes);
    };
    Time.prototype.getSeconds = function () {
        console.log(this.seconds);
    };
    Time.prototype.setHours = function (hours) {
        if (hours >= 0 && hours <= 24) {
            this.hours = hours;
        }
        else {
            throw new Error("Invalid hours");
        }
    };
    Time.prototype.setMinutes = function (minutes) {
        if (minutes >= 0 && minutes <= 60) {
            this.minutes = minutes;
        }
        else {
            throw new Error("Invalid minutes");
        }
    };
    Time.prototype.setSeconds = function (seconds) {
        if (seconds >= 0 && seconds <= 60) {
            this.seconds = seconds;
        }
        else {
            throw new Error("Invalid seconds");
        }
    };
    return Time;
}());
var time1 = new Time({ hours: 12, minutes: 30, seconds: 45 });
time1.getTime();
time1.setHours(4);
time1.setMinutes(30);
time1.setSeconds(45);
time1.getTime();
var time2 = new Time({ minutes: 30, seconds: 45 });
time2.getTime();
time2.setHours(12);
time2.setMinutes(30);
time2.setSeconds(45);
time2.getTime();
var time3 = new Time({ seconds: 45 });
time3.getTime();
time3.setHours(15);
time3.setMinutes(45);
time3.setSeconds(25);
time3.getTime();
var time4 = new Time(time1);
time4.getTime();
var time5 = new Time({});
time5.getTime();
time5.setHours(12);
time5.setMinutes(30);
time5.setSeconds(45);
time5.getTime();
