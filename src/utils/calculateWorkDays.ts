
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
const calculateWorkDays = (
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

export default calculateWorkDays;