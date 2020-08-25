/**
 *  format duration from minutes to hh:mm
 * @param timeInMin
 * @returns formated string hh:mm
 */
export const formatDuration = (timeInMin = 0): string => {
  const hh = Math.floor(timeInMin / 60)
  const mm = timeInMin === 0 ? timeInMin : timeInMin - hh * 60

  return `${hh}ч ${mm}м`
}

/**
 * get time from date in string format
 * @param date - date that needs format
 * @param timezone - timezone
 * @returns time in string format
 */
export const getTimeFromDate = (date: number, timezone = 'UTC'): string => {
  const options = {
    timezone,
    hour: 'numeric',
    minute: 'numeric',
  }

  return new Date(date).toLocaleTimeString('ru', options)
}

/**
 * format time to `startTime - endTime`
 * @param date - initial date
 * @param duration - duration in minutes
 * @param timezone - timezone
 * @returns`startTime - endTime`
 */
export const formatTimeInterval = (
  date: Date,
  duration: number,
  timezone: string,
): string => {
  const startTime = new Date(date).getTime()
  const endTime = startTime + 60 * 1000 * duration
  const formattedStartTime = getTimeFromDate(startTime, timezone)
  const formattedEndTime = getTimeFromDate(endTime, timezone)

  return `${formattedStartTime} – ${formattedEndTime}`
}
