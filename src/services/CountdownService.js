import { applyStyles } from "@popperjs/core";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger"

const newYears = '1 January 2022'

// const hoursEl = document.getElementById('hours')
// const minutesEl = document.getElementById('minutes')
// const secondsEl = document.getElementById('seconds')
class CountdownService{

  constructor(){
    console.log("countdown service working")
    setInterval(this.count, 1000);

    this.count()
  }

  count(){
    logger.log("count")
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()


    const totalSeconds = (newYearsDate - currentDate) / 1000


    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    AppState.timeData.days = days
    AppState.timeData.hours = hours
    AppState.timeData.minutes = minutes
    AppState.timeData.seconds = seconds

  }

}

export const countdownService = new CountdownService()

