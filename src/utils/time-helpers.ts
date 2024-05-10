import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from "date-fns";

/**
 * getTimestamp is a helper function that creates a timestamp string
 *
 * @returns string timestamp (e.g. 20240426-134530)
 */
export const getTimestamp = (): string => {
  // Get the current date and time
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}${month}${day}-${hours}${minutes}${seconds}`;
};

/**
 * readableTimestamp is a helper function that returns a human readable
 * timestamp in the form of: X years, Y months, Z days.
 * 
 * @param startDate 
 * @param endDate 
 * @returns 
 */
export const readableTimestamp = (startDate: Date, endDate: Date): string => {
  const years = differenceInYears(endDate, startDate);
  const months = differenceInMonths(endDate, startDate);
  const days = differenceInDays(endDate, startDate);

  let result = "";

  if (years > 0) {
    result += `${years} year${years > 1 ? "s" : ""}, `;
  }

  if (months > 0) {
    result += `${months} month${months > 1 ? "s" : ""}, `;
  }

  if (days > 0) {
    result += `${days} day${days > 1 ? "s" : ""}`;
  }

  return result;
};


/**
 * calculateWorkDays does what the name implies, it calculates the number of work
 * days between 2 days and will exclude holidays if provided.
 * 
 * @example
 *   const numWorkDays = calculateWorkDays(
 *      '2024-03-01', '2024-03-31', ['2024-03-10', '2024-03-24']
 *   );
 * 
 * @param startDate 
 * @param endDate 
 * @param holidays 
 * @returns number of work days
 */
export const calculateWorkdays = (
  startDate: string,
  endDate: string,
  holidays: string[]
): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let count = 0;

  for (let day = start; day <= end; day.setDate(day.getDate() + 1)) {
    const weekDay = day.getDay();
    const formattedDate = day.toISOString().split("T")[0];
    // Skip weekends and holidays
    if (weekDay !== 0 && weekDay !== 6 && !holidays.includes(formattedDate)) {
      count++;
    }
  }

  return count;
};