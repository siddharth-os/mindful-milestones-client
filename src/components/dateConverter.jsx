export function convertDate(value) {
  // Input date string in UTC format
  const utcDateString = value;

  // Create a new Date object from the input date string
  const utcDate = new Date(utcDateString);

  // Get the UTC hours, minutes, and seconds from the Date object
  const utcHours = utcDate.getUTCHours();
  const utcMinutes = utcDate.getUTCMinutes();
  const utcSeconds = utcDate.getUTCSeconds();

  // Calculate the equivalent IST hours, minutes, and seconds
  const istHours = utcHours + 5; // Add 5 hours for IST
  const istMinutes = utcMinutes + 30; // Add 30 minutes for IST

  // Create a new Date object for IST
  const istDate = new Date();
  istDate.setHours(istHours, istMinutes, utcSeconds);

  // Format the IST date object to string in IST time only format (HH:mm:ss)
  const istTimeOnlyString = istDate.toTimeString().slice(0, 5);
  return istTimeOnlyString;
}
