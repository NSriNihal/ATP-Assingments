/**
 * OTP Countdown Simulator
 * 
 * Topic: Asynchronous JavaScript — setInterval & clearInterval
 * 
 * Scenario: Simulate an OTP sending flow with countdown timer.
 * 
 * Flow:
 *   1. Show "OTP sent successfully"
 *   2. Start a 5-second countdown
 *   3. Allow resend only after countdown ends
 * 
 * Concepts: setInterval, clearInterval, timer-based flow control
 */

// Step 1: OTP sent notification
console.log("OTP sent Successfully");

// Step 2: Initialize countdown timer
let second = 5;

// Step 3: Start interval that fires every 1 second
let intervalID = setInterval(() => {
  second--;
  console.log(`OTP can be resent after ${second}s`);

  // When countdown reaches 0, stop the interval and enable resend
  if (second === 0) {
    console.log("Resend OTP");
    clearInterval(intervalID); // Stop the repeating timer
  }
}, 1000);
