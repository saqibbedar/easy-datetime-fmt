function formatDateTime(date : Date) : string {
    
    const months : string[] = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const month : string = months[date.getMonth()];
    const day : number = date.getDate();
    const year : number = date.getFullYear();
  
    let hours : number = date.getHours();
    const minutes : string = date.getMinutes().toString().padStart(2, "0");
    const ampm : string = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour time to 12-hour time, and handle "0" as "12".
  
    return `${month} ${day}, ${year}, ${hours}:${minutes} ${ampm}`;
}
  
function formatDate(date : Date) : string {
      const months : string[] = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
      const month : string = months[date.getMonth()];
      const day : number = date.getDate();
      const year : number = date.getFullYear();
    
      return `${month} ${day}, ${year}`;
}
  
function formatTime(time : Date) : string {
      let hours : number = time.getHours();
      const minutes : string = time.getMinutes().toString().padStart(2, "0");
      const ampm : string = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
    
      return `${hours}:${minutes} ${ampm}`;
}

export {formatDateTime, formatDate, formatTime};