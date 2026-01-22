// Create a Date object with the current date & time
const now = new Date();

// Add 2 minutes (2 × 60 × 1000 milliseconds)
now.setMinutes(now.getMinutes() + 2);

// Format the time using Europe/Oslo timezone (handles DST automatically)
const publishStart = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Oslo", // Norway timezone (CET / CEST)
  hour: "2-digit",        // 24-hour hour format
  minute: "2-digit",      // Minutes
  hour12: false           // Force 24-hour time
}).format(now);

// Return the value
return publishStart;
