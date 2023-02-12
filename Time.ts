class Time {
  private hours: number;
  private minutes: number;
  private seconds: number;

  constructor( //constructor overloading, takes in object of time hours, minutes, seconds or an instance of class Time
    time: { hours?: number; minutes?: number; seconds?: number } | Time
  ) {
    if (time instanceof Time) { //check if time is a Time object or an instance of class Time
      this.hours = time.hours;
      this.minutes = time.minutes;
      this.seconds = time.seconds;
    } else {
      this.hours = time.hours || 0;
      this.minutes = time.minutes || 0;
      this.seconds = time.seconds || 0;
    }
  }
  getTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }
  getHours() {
    console.log(this.hours);
  }
  getMinutes() {
    console.log(this.minutes);
  }
  getSeconds() {
    console.log(this.seconds);
  }
  setHours(hours: number) {
    if (hours >= 0 && hours <= 24) {
      this.hours = hours;
    } else {
      throw new Error("Invalid hours");
    }
  }
  setMinutes(minutes: number) {
    if (minutes >= 0 && minutes <= 60) {
      this.minutes = minutes;
    } else {
      throw new Error("Invalid minutes");
    }
  }
  setSeconds(seconds: number) {
    if (seconds >= 0 && seconds <= 60) {
      this.seconds = seconds;
    } else {
      throw new Error("Invalid seconds");
    }
  }
}

let time1 = new Time({ hours: 12, minutes: 30, seconds: 45 });
time1.getTime();
time1.setHours(4);
time1.setMinutes(30)
time1.setSeconds(45)
time1.getTime();
let time2 = new Time({ minutes: 30, seconds: 45 });
time2.getTime();
time2.setHours(12);
time2.setMinutes(30);
time2.setSeconds(45);
time2.getTime()
let time3 = new Time({ seconds: 45 });
time3.getTime();
time3.setHours(15);
time3.setMinutes(45);
time3.setSeconds(25); 
time3.getTime();
let time4 = new Time(time1);
time4.getTime();
let time5 = new Time({});
time5.getTime();
time5.setHours(12);
time5.setMinutes(30);
time5.setSeconds(45);
time5.getTime();

