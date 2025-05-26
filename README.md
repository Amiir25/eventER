# eventER – Fictional Event Booking Website

**eventER** is a responsive, JavaScript-powered event booking platform built as a portfolio project to practice **HTML form validation**, **dynamic UI behavior**, and **responsive frontend design**.

> Browse diverse fictional events, explore details in an interactive popup, and book with a fully validated form – including age restrictions and contact preferences.


## Features

- **Browse Events**  
  Explore over 20 fictional events including public lectures, competitions, workshops, and educational programs.

- **Event Details Popup**  
  Each event includes a quick “Learn More” popup showing:
  - Title, Description
  - Date & countdown
  - Price, Spots left
  - Age restriction

- **Event Booking Form**  
  - Full validation with custom rules:
    - Name, Email, Phone (Ethiopian format), Password
    - DOB-based age check vs. event age restriction
    - Reminder method (Email, SMS, Phone Call)
  - Dynamic error messages
  - Responsive and clean layout using TailwindCSS
  - Shows user-submitted data after booking with a confirmation screen (auto-hides after 10 seconds)

## Technologies Used

- **HTML5**
- **TailwindCSS** – layout, responsiveness, and styling
- **JavaScript (Vanilla)** – form validation, event logic, DOM manipulation
- **CSS (minor)** – transitions and animations

## Responsive Design

The layout adapts seamlessly across mobile, tablet, and desktop devices using Tailwind's mobile-first utility classes.

[View the live demo](https://amiir25.github.io/eventER/)