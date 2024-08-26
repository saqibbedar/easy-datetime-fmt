/**
 * Formats a Date object into a string with the format "MMM DD, YYYY, HH:MM AM/PM".
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date and time.
 * @throws {Error} If the input is not a valid Date object.
 */
function formatDateTime(date: Date): string {
      if (!(date instanceof Date) || isNaN(date.getTime())) {
          throw new Error("Invalid Date");
      }
  
      const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month: string = months[date.getMonth()];
      const day: string = date.getDate().toString().padStart(2, "0");
      const year: number = date.getFullYear();
  
      let hours: number = date.getHours();
      const minutes: string = date.getMinutes().toString().padStart(2, "0");
      const ampm: string = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
  
      return `${month} ${day}, ${year}, ${hours}:${minutes} ${ampm}`;
  }
  
  /**
   * Formats a Date object into a string with the format "MMM DD, YYYY".
   * @param {Date} date - The date to format.
   * @returns {string} The formatted date.
   * @throws {Error} If the input is not a valid Date object.
   */
  function formatDate(date: Date): string {
      if (!(date instanceof Date) || isNaN(date.getTime())) {
          throw new Error("Invalid Date");
      }
  
      const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month: string = months[date.getMonth()];
      const day: string = date.getDate().toString().padStart(2, "0");
      const year: number = date.getFullYear();
  
      return `${month} ${day}, ${year}`;
  }
  
  /**
   * Formats a Date object into a string with the format "HH:MM AM/PM".
   * @param {Date} time - The time to format.
   * @returns {string} The formatted time.
   * @throws {Error} If the input is not a valid Date object.
   */
  function formatTime(time: Date): string {
      if (!(time instanceof Date) || isNaN(time.getTime())) {
          throw new Error("Invalid Date");
      }
  
      let hours: number = time.getHours();
      const minutes: string = time.getMinutes().toString().padStart(2, "0");
      const ampm: string = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
  
      return `${hours}:${minutes} ${ampm}`;
  }
  
  export { formatDateTime, formatDate, formatTime };
  