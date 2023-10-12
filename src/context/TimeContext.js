import { createContext } from "react";
import Holidays from "date-holidays";

export const TimeContext = createContext({
  isOpen: () => {},
  getDay: () => {},
});

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function TimeProvider({ children }) {
  function isOpen() {
    var hd = new Holidays("DE", "nw");
    var Now = new Date();
    const time = Now.getHours() * 100 + Now.getMinutes();
    if (hd.isHoliday(Now)) {
      if (time <= 2230 && time >= 1700) {
        return true;
      }
    } else if (Now.getDay() === 1 || Now.getDay() === 2) {
      if (time <= 2230 && time >= 1730) {
        return true;
      }
    } else if (Now.getDay() === 3 || Now.getDay() === 4) {
      if (time <= 1430 && time >= 1130) {
        return true;
      } else if (time <= 2230 && time >= 1730) {
        return true;
      }
    } else if (Now.getDay() === 5) {
      if (time <= 1430 && time >= 1130) {
        return true;
      } else if (time <= 2300 && time >= 1730) {
        return true;
      }
    } else if (Now.getDay() === 6) {
      if (time <= 2300 && time >= 1700) {
        return true;
      }
    } else if (Now.getDay() === 0) {
      if (time <= 2230 && time >= 1700) {
        return true;
      }
    } else {
      return false;
    }
  }

  function getDay() {
    var hd = new Holidays("DE", "nw");
    var now = new Date();
    if (hd.isHoliday(now)) {
      return "";
    } else {
      return days[now.getDay()];
    }
  }

  const contextValue = {
    isOpen,
    getDay,
  };

  return (
    <TimeContext.Provider value={contextValue}>{children}</TimeContext.Provider>
  );
}

export default TimeProvider;
