export function formatDate(date: Date) {
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
}

export function addElapsedTime(pastDate: Date, otherDate: Date): string {
  let elapsedTime = new Date().getTime() - pastDate.getTime();
  return formatDate(new Date(otherDate.getTime() + elapsedTime));
}
