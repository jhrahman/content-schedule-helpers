# ⏰ Oslo Time Content Scheduler Helpers

This repository contains two small JavaScript helpers used for **content scheduling**.
Their purpose is to generate **future publish times** based on the **current Oslo (Norway) time**.

These helpers are useful for automation, testing, and CMS workflows where content must be scheduled slightly in the future.

---

## 🎯 Goal

- **publishStart** → Current Oslo time **+ 2 minutes**
- **publishEnd** → Current Oslo time **+ 4 minutes**
- Output format: **24-hour (`HH:mm`)**
- Automatically handles **CET / CEST (Daylight Saving Time)**

---

## ⏳ publishStart — Start Time (Now + 2 Minutes)

### Purpose
Generates a publish **start time** that is always **2 minutes ahead** of the current Oslo time.

---

### Code
```js
// Create a Date object with the current date & time
const now = new Date();

// Add 2 minutes
now.setMinutes(now.getMinutes() + 2);

// Format the time using Europe/Oslo timezone
const publishStart = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Oslo",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
}).format(now);

// Return the value so it can be stored or used
return publishStart;
```

---

## ⏱️ publishEnd — End Time (Now + 4 Minutes)

### Purpose
Generates a publish **end time** that is always **4 minutes ahead** of the current Oslo time.

This is typically used to define how long the content should remain published or active.

---

### Code
```js
// Create a Date object with the current date & time
const now = new Date();

// Add 4 minutes
now.setMinutes(now.getMinutes() + 4);

// Format the time using Europe/Oslo timezone
const publishEnd = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Oslo",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
}).format(now);

// Return the value so it can be stored or used
return publishEnd;
```

